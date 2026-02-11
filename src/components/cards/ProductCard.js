"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuickViewModal from "@/components/QuickViewModal/QuickViewModal";
import { useWishlist } from "@/context/WishlistContext";
import "@/styles/categoryGrid.css";

export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    id,
    name = "Product Name",
    image = "/placeholder.png",
    price = 0,
    oldPrice = 121,
    discount = null,
  } = product;

  const [quickView, setQuickView] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const router = useRouter();

  const isFavorited = isInWishlist(id);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    isFavorited ? removeFromWishlist(id) : addToWishlist(product);
  };

  /* ---------------- ADD TO CART (FIXED) ---------------- */
  const handleAddToCart = (e) => {
    e.stopPropagation();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((item) => item.id === id);

    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          id,
          name,
          image,
          price,
          oldPrice,
          discount,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    router.push("/cart");
  };

  const goToProduct = () => {
    router.push(`/product/${id}`);
  };

  return (
    <>
      <div className="product-card" onClick={goToProduct}>
        <div className="product-image">
          <div
            className="product-actions left"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={handleAddToCart}>
              <i className="fa fa-shopping-cart" />
            </button>

            <button onClick={toggleWishlist}>
              <i
                className="fa fa-heart"
                style={{ color: isFavorited ? "red" : "#555" }}
              />
            </button>

            <button>
              <i className="fa fa-refresh" />
            </button>

            <button onClick={() => setQuickView(true)}>
              <i className="fa fa-eye" />
            </button>
          </div>

          {discount && (
            <span className="discount-badge">-{discount}%</span>
          )}

          <img src={image} alt={name} loading="lazy" draggable={false} />
        </div>

        <div className="product-content">
          <h3 className="product-title">{name}</h3>
          <p className="price">
            ₹{price} <span>₹{oldPrice}</span>
          </p>
        </div>
      </div>

      {quickView && (
        <QuickViewModal
          product={product}
          onClose={() => setQuickView(false)}
        />
      )}
    </>
  );
}
