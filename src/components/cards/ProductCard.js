"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuickViewModal from "@/components/QuickViewModal/QuickViewModal";
import { useWishlist } from "@/context/WishlistContext";
import "@/styles/categoryGrid.css";
// Consider adding PropTypes to validate the 'product' prop structure

export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    id,
    name = "Product Name",
    image = "/placeholder.png",
    price = 0,
    oldPrice = 0,
    discount = null,
  } = product;

// Consider adding PropTypes to validate the 'product' prop structure
  const [quickView, setQuickView] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const router = useRouter();

  const isFavorited = isInWishlist(id);

  const toggleWishlist = (e) => {
    e.stopPropagation(); 
    isFavorited ? removeFromWishlist(id) : addToWishlist(product);
  };

// Avoid using localStorage for sensitive data; consider using a secure backend API
  /* ---------------- ADD TO CART (FIXED) ---------------- */
  const handleAddToCart = (e) => {
    e.stopPropagation();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Consider extracting this logic into a separate utility function for better reusability
    const existingItem = cart.find((item) => item.id === id);

    let updatedCart;
// Avoid using localStorage for sensitive data; consider using a secure backend API

    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
// Consider extracting this logic into a separate utility function for better reusability
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

// Add 'alt' text for accessibility and SEO purposes
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    router.push("/cart");
  };

  const goToProduct = () => {
    router.push(`/product/${id}`);
// Consider using a CSS-in-JS solution or CSS modules for better scoping and maintainability
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
