// "use client";

// import { useState } from "react";
// import QuickViewModal from "@/components/QuickViewModal/QuickViewModal";
// import { useWishlist } from "@/context/WishlistContext";
// import "@/styles/categoryGrid.css";
// import { useRouter } from "next/navigation";


// export default function ProductCard({ product }) {
//   const [quickView, setQuickView] = useState(false);
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

//   const toggleWishlist = () => {
//     isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product);
//   };
//   const router = useRouter(); // ✅ correct hook usage

//   const openProductPage = (id) => {
//     router.push(`/product/${id}`); // Navigate to product page
//   }; 

//   return (
//     <>
//       <div className="product-card">
//         <div className="product-image">
//           <div className="product-actions left">
//             <button>
//               <i className="fa fa-shopping-cart" />
//             </button>

//             {/* ❤️ WISHLIST */}
//             <button onClick={toggleWishlist}>
//               <i
//                 className="fa fa-heart"
//                 style={{ color: isInWishlist(product.id) ? "red" : "#555" }}
//               />
//             </button>

//             <button>
//               <i className="fa fa-refresh" />
//             </button>

//             <button onClick={() => setQuickView(true)}>
//               <i className="fa fa-eye" />
//             </button>
//           </div>

//           {product.discount && (
//             <span className="discount-badge">-{product.discount}%</span>
//           )}

//            <img
//                 src={product.image}
//                 alt={product.name}
//                 className="cursor-pointer"
//                 onClick={() => openProductPage(product.id)}
//               />
//             </div>
//         <div className="product-info">
//           <h4>{product.name}</h4>
//           <div className="rating">
//             {"★".repeat(product.rating)}
//             {"☆".repeat(5 - product.rating)}
//           </div>
//           <div className="price">
//             ${product.price.toFixed(2)}
//             {product.oldPrice && <span>${product.oldPrice.toFixed(2)}</span>}
//           </div>
//         </div>
//       </div>

//       {quickView && (
//         <QuickViewModal product={product} onClose={() => setQuickView(false)} />
//       )}
//     </>
//   );
// }

















"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuickViewModal from "@/components/QuickViewModal/QuickViewModal";
import { useWishlist } from "@/context/WishlistContext";
import "@/styles/categoryGrid.css";

export default function ProductCard({ product }) {
  const [quickView, setQuickView] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const router = useRouter();

  const isFavorited = isInWishlist(product.id);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    isFavorited
      ? removeFromWishlist(product.id)
      : addToWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();

    // addToCart(product); // if using CartContext

    router.push("/cart");
    router.refresh(); // ✅ force reload cart data
  };

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <div className="product-actions left">
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

            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuickView(true);
              }}
            >
              <i className="fa fa-eye" />
            </button>
          </div>

          {product.discount && (
            <span className="discount-badge">-{product.discount}%</span>
          )}

          <img
            src={product.image}
            alt={product.name}
            onClick={() => router.push(`/product/${product.id}`)}
          />
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
