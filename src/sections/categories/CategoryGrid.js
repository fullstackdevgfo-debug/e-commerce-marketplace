// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation"; // correct import
// import "@/styles/categoryGrid.css";
// import QuickViewModal from "@/components/QuickViewModal/QuickViewModal";
// import { useWishlist } from "@/context/WishlistContext";

// const products = [
//   {
//     id: 1,
//     name: "Benderloin officia",
//     image: "/GFO-Fireball.png",
//     price: 77,
//     oldPrice: 82,
//     discount: 6,
//     rating: 4,
//     gallery: ["/GFO-Fireball.png", "/banner.webp"],
//   },
//   {
//     id: 2,
//     name: "Flip-Flops",
//     image: "/GFO-Fireball.png",
//     price: 62,
//     rating: 4,
//     gallery: ["/GFO-Fireball.png"],
//   },
// ];

// export default function CategoryGrid() {
//   const [quickView, setQuickView] = useState(null);
//   const { addToWishlist, isInWishlist } = useWishlist();
  // const router = useRouter(); // ✅ correct hook usage

  // const openProductPage = (id) => {
  //   router.push(`/product/${id}`); // Navigate to product page
  // };

//   return (
//     <>
//       <div className="category-grid">
//         {products.map((item) => (
//           <div className="product-card" key={item.id}>
//             <div className="product-image">
//               <div className="product-actions left">
//                 <button>
//                   <i className="fa fa-shopping-cart" />
//                 </button>

//                 <button onClick={() => addToWishlist(item)}>
//                   <i
//                     className="fa fa-heart"
//                     style={{ color: isInWishlist(item.id) ? "red" : "#555" }}
//                   />
//                 </button>

//                 <button>
//                   <i className="fa fa-refresh" />
//                 </button>

//                 {/* Quick View modal */}
//                 <button onClick={() => setQuickView(item)}>
//                   <i className="fa fa-eye" />
//                 </button>
//               </div>

//               {item.discount && (
//                 <span className="discount-badge">-{item.discount}%</span>
//               )}

//               {/* Click image to open product page */}
            //   <img
            //     src={item.image}
            //     alt={item.name}
            //     className="cursor-pointer"
            //     onClick={() => openProductPage(item.id)}
            //   />
            // </div>

            // <div className="product-info">
            //   <h4>{item.name}</h4>
            //   <div className="rating">
            //     {"★".repeat(item.rating)}
            //     {"☆".repeat(5 - item.rating)}
            //   </div>
            //   <div className="price">
            //     ${item.price.toFixed(2)}
            //     {item.oldPrice && <span>${item.oldPrice.toFixed(2)}</span>}
            //   </div>
            // </div>
//           </div>
//         ))}
//       </div>

//       {quickView && (
//         <QuickViewModal
//           product={quickView}
//           onClose={() => setQuickView(null)}
//         />
//       )}
//     </>
//   );
// }



"use client";

import { useState } from "react";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/cards/ProductCard";
import QuickViewModal from "@/components/QuickViewModal/QuickViewModal";
import "@/styles/categoryGrid.css";

const products = [
  {
    id: 1,
    name: "Benderloin officia",
    image: "/GFO-Fireball.png",
    price: 77,
    oldPrice: 82,
    discount: 6,
    rating: 4,
    gallery: ["/GFO-Fireball.png", "/banner.webp"],
  },
  {
    id: 2,
    name: "Flip-Flops",
    image: "/GFO-Fireball.png",
    price: 62,
    rating: 4,
    gallery: ["/GFO-Fireball.png"],
  },
];

export default function CategoryGrid() {
  const [quickView, setQuickView] = useState(null);
  const { addToWishlist, isInWishlist } = useWishlist();

  return (
    <>
      <div className="category-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onQuickView={(product) => setQuickView(product)}
            addToWishlist={addToWishlist}
            isInWishlist={isInWishlist}
          />
        ))}
      </div>

      {quickView && (
        <QuickViewModal
          product={quickView}
          onClose={() => setQuickView(null)}
        />
      )}
    </>
  );
}
