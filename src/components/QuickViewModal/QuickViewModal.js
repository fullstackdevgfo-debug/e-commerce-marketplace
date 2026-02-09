// "use client";
// import { useState } from "react";

// export default function QuickViewModal({ product, onClose }) {
//   const [qty, setQty] = useState(1);

//   const [selectedImage, setSelectedImage] = useState(
//     product.gallery?.[0] || product.image
//   );

//   const increaseQty = () => setQty((prev) => prev + 1);
//   const decreaseQty = () => qty > 1 && setQty((prev) => prev - 1);

//   const inStock = product.stock !== false; // default true

//   return (
//     <>
//       <div className="quickview-overlay" onClick={onClose} />

//       <div className="quickview-modal">
//         <button className="quickview-close" onClick={onClose}>
//           <i className="fa fa-times" />
//         </button>

//         <div className="quickview-content">
//           {/* LEFT */}
//           <div className="quickview-left">
//             <img src={selectedImage} alt={product.name} className="main-image" />

//             <div className="quickview-thumbs">
//               {product.gallery?.map((img, i) => (
//                 <img
//                   key={i}
//                   src={img}
//                   alt=""
//                   className={selectedImage === img ? "active" : ""}
//                   onClick={() => setSelectedImage(img)}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="quickview-right">
//             <h2>{product.name}</h2>

//             {/* STOCK */}
//             <div className={`stock ${inStock ? "in" : "out"}`}>
//               <span />
//               {inStock ? "In Stock" : "Out of Stock"}
//             </div>

//             <div className="rating">
//               {"★".repeat(product.rating)}
//               {"☆".repeat(5 - product.rating)}
//             </div>

//             <div className="price">
//               ${product.price.toFixed(2)}
//               {product.oldPrice && (
//                 <span>${product.oldPrice.toFixed(2)}</span>
//               )}
//             </div>

//             <p className="desc">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore.
//             </p>

//             {/* QTY */}
//             <div className="qty-wrapper">
//               <span className="qty-label">Qty</span>
//               <div className="qty-box">
//                 <button onClick={decreaseQty}>−</button>
//                 <input
//                   type="text"
//                   value={qty}
//                   onChange={(e) =>
//                     setQty(Math.max(1, Number(e.target.value)))
//                   }
//                 />
//                 <button onClick={increaseQty}>+</button>
//               </div>
//             </div>

//             <div className="actions">
//               <button className="add-cart" disabled={!inStock}>
//                 Add to Cart
//               </button>
//               <button className="buy-now" disabled={!inStock}>
//                 Buy Now
//               </button>
//               <button >
//                 View
//               </button>
//             </div>
           
//           </div>
//         </div>  
//       </div>
//     </>
//   );
// }



"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function QuickViewModal({ product, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    product.gallery?.[0] || product.image
  );

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  if (!mounted) return null;

  const inStock = product.stock !== false;

  // 🔥 ADD TO CART FUNCTION
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingIndex !== -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: qty,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    onClose();
    router.push("/cart");
  };

  // 🔥 BUY NOW (same add → redirect)
  const buyNow = () => {
    addToCart();
  };

  const modalContent = (
    <>
      <div className="quickview-overlay" onClick={onClose} />
      <div className="quickview-modal">
        <button className="quickview-close" onClick={onClose}>
          <i className="fa fa-times" />
        </button>

        <div className="quickview-content">
          {/* LEFT */}
          <div className="quickview-left">
            <div className="main-image-container">
              <img
                src={selectedImage}
                alt={product.name}
                className="main-image"
              />
            </div>

            <div className="quickview-thumbs">
              <img
                src={product.image}
                className={selectedImage === product.image ? "active" : ""}
                onClick={() => setSelectedImage(product.image)}
              />
              {product.gallery?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={selectedImage === img ? "active" : ""}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="quickview-right">
            <h2>{product.name}</h2>

            <div className={`stock-status ${inStock ? "in" : "out"}`}>
              {inStock ? "In Stock" : "Out of Stock"}
            </div>

            <div className="product-price">
              ₹{product.price}
              {product.oldPrice && (
                <span className="old-price">₹{product.oldPrice}</span>
              )}
            </div>

            <p className="product-description">
              High quality fire safety equipment for industrial use.
            </p>

            <div className="actions-section">
              <div className="qty-row">
                <span>Qty</span>
                <div className="qty-control">
                  <button onClick={() => setQty(Math.max(1, qty - 1))}>
                    −
                  </button>
                  <input value={qty} readOnly />
                  <button onClick={() => setQty(qty + 1)}>+</button>
                </div>
              </div>

              <div className="button-row">
                <button
                  className="btn-orange"
                  disabled={!inStock}
                  onClick={addToCart}
                >
                  ADD TO CART
                </button>

                <button
                  className="btn-green"
                  disabled={!inStock}
                  onClick={buyNow}
                >
                  BUY NOW
                </button>

                <button
                  className="btn-view"
                  onClick={() => {
                    onClose();
                    router.push(`/product/${product.id}`);
                  }}
                >
                  VIEW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
}
