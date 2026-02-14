"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "@/styles/productPage.css";

const sampleProduct = {
  id: 392,
  name: "GFO Fireball",
  description: "High-quality fire safety product to protect your home and office.",
  price: 77,
  oldPrice: 88,
  discount: 17,
  rating: 4,
  gallery: [
    "/GFO-Fireball.png",
    "/banner.webp",
    "/GFO-Fireball.png",
    "/banner.webp",
    "/GFO-Fireball.png",
  ],
};


export default function ProductPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    sampleProduct.gallery[0]
  );
  const [isWishlisted, setIsWishlisted] = useState(false);

  const router = useRouter();

/* ---------------- ADD TO CART (LOCALSTORAGE) ---------------- */
const handleAddToCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(
    (item) => item.id === sampleProduct.id
  );

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      id: sampleProduct.id,
      name: sampleProduct.name,
      price: sampleProduct.price,
      oldPrice: sampleProduct.oldPrice,
      discount: sampleProduct.discount,
      image: sampleProduct.gallery[0],
      quantity: quantity,
      stock: "In Stock",
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  router.push("/cart");
};


  /* ---------------- CHECK WISHLIST ON LOAD ---------------- */
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(wishlist.some((item) => item.id === sampleProduct.id));
  }, []);

  /* ---------------- TOGGLE WISHLIST ---------------- */
  const handleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isWishlisted) {
      const updatedWishlist = wishlist.filter(
        (item) => item.id !== sampleProduct.id
      );

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsWishlisted(false);
    } else {
      wishlist.push({
        id: sampleProduct.id,
        name: sampleProduct.name,
        price: sampleProduct.price,
        image: sampleProduct.gallery[0],
      });

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsWishlisted(true);
    }
  };

  return (
    <div className="product-page">
      {/* IMAGE GALLERY */}
      <div className="image-gallery">
        <Swiper
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          navigation
          spaceBetween={10}
          className="main-swiper"
        >
          {sampleProduct.gallery.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="main-image"
                onClick={() => {
                  setSelectedImage(img);
                  setShowModal(true);
                }}
              >
                <Image src={img} alt="Product" width={500} height={500} />
                {sampleProduct.discount && (
                  <span className="discount-badge">
                    -{sampleProduct.discount}%
                  </span>
                )}
              </div> 
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={10}
          slidesPerView={5}
          watchSlidesProgress
          className="thumbnail-swiper"
        >
          {sampleProduct.gallery.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="thumbnail-wrapper">
                <Image src={img} alt="Thumb" width={80} height={80} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* PRODUCT INFO */}
      <div className="product-info">
        <h1>{sampleProduct.name}</h1>

        <div className="rating">
          {"★".repeat(sampleProduct.rating)}
          {"☆".repeat(5 - sampleProduct.rating)}
        </div>

        <p className="description">{sampleProduct.description}</p>
        
          <div className="price">
            ${sampleProduct.price.toFixed(2)}
            {sampleProduct.oldPrice && <span>${sampleProduct.oldPrice.toFixed(2)}</span>}
          </div>

        {/* QUANTITY */}
        <div className="quantity-selector">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
            −
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>

        {/* ACTION BUTTONS */}
        <div className="actions">
          <button className="add-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button
            className={`wishlist ${isWishlisted ? "active" : ""}`}
            onClick={handleWishlist}
          >
            {isWishlisted ? "Wishlisted ❤️" : "Add to Wishlist 🤍"}
          </button>
        </div>
      </div>

      {/* IMAGE ZOOM MODAL */}
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt="Zoom" width={800} height={800} />
          </div>
        </div>
      )}
    </div>
  );
}