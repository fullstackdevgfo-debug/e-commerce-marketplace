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



// "use client";

// import { useState } from "react";
// import { useWishlist } from "@/context/WishlistContext";
// import ProductCard from "@/components/cards/ProductCard";
// import QuickViewModal from "@/components/QuickViewModal/QuickViewModal";
// import "@/styles/categoryGrid.css";

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

//   return (
//     <>
//       <div className="category-grid">
//         {products.map((item) => (
//           <ProductCard
//             key={item.id}
//             product={item}
//             onQuickView={(product) => setQuickView(product)}
//             addToWishlist={addToWishlist}
//             isInWishlist={isInWishlist}
//           />
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






// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "@/components/cards/ProductCard";
// import CategoryToolbar from "./CategoryToolbar";
// import QuickViewModal from "@/components/QuickViewModal/QuickViewModal";
// import "@/styles/categoryGrid.css";

// const PRODUCTS = [
//   { id: 1, name: "Benderloin officia", price: 77, rating: 4, image: "/GFO-Fireball.png" },
//   { id: 2, name: "Flip-Flops", price: 62, rating: 3, image: "/GFO-Fireball.png" },
//   { id: 3, name: "Sneakers", price: 99, rating: 5, image: "/GFO-Fireball.png" },
//   { id: 4, name: "Boots", price: 120, rating: 4, image: "/GFO-Fireball.png" },
//   { id: 5, name: "Sandals", price: 45, rating: 3, image: "/GFO-Fireball.png" },
//   { id: 6, name: "Loafers", price: 85, rating: 4, image: "/GFO-Fireball.png" },
//   { id: 7, name: "Slippers", price: 30, rating: 2, image: "/GFO-Fireball.png" },
// ];

// export default function CategoryGrid() {
//   const [products, setProducts] = useState(PRODUCTS);
//   const [visibleProducts, setVisibleProducts] = useState(PRODUCTS);
//   const [quickView, setQuickView] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage, setPerPage] = useState(15);

//   /* ---------- APPLY FILTER ---------- */
//   const handleApply = ({ sort, show }) => {
//     let updatedProducts = [...products];

//     if (sort === "low-high") {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     }

//     if (sort === "high-low") {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setPerPage(show);
//     setCurrentPage(1);
//     setVisibleProducts(updatedProducts);
//   };

//   /* ---------- PAGINATION ---------- */
//   const start = (currentPage - 1) * perPage;
//   const end = start + perPage;
//   const paginatedProducts = visibleProducts.slice(start, end);

//   const totalPages = Math.ceil(visibleProducts.length / perPage);

//   return (
//     <>
//       <CategoryToolbar
//         onFilterClick={() => console.log("Filter clicked")}
//         onApply={handleApply}
//       />

//       <div className="category-grid">
//         {paginatedProducts.map((item) => (
//           <ProductCard
//             key={item.id}
//             product={item}
//             onQuickView={() => setQuickView(item)}
//           />
//         ))}
//       </div>

//       {/* PAGINATION */}
//       {totalPages > 1 && (
//         <div className="pagination">
//           {[...Array(totalPages)].map((_, i) => (
//             <button
//               key={i}
//               className={currentPage === i + 1 ? "active" : ""}
//               onClick={() => setCurrentPage(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       )}

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
import ProductCard from "@/components/cards/ProductCard";
import CategoryToolbar from "./CategoryToolbar";
import QuickViewModal from "@/components/QuickViewModal/QuickViewModal";
import "@/styles/categoryGrid.css";

const PRODUCTS = [
  { id: 1, name: "Benderloin officia", price: 77, rating: 4, image: "/GFO-Fireball.png" },
  { id: 2, name: "Flip-Flops", price: 62, rating: 3, image: "/GFO-Fireball.png" },
  { id: 3, name: "Sneakers", price: 99, rating: 5, image: "/GFO-Fireball.png" },
  { id: 4, name: "Boots", price: 120, rating: 4, image: "/GFO-Fireball.png" },
  { id: 5, name: "Sandals", price: 45, rating: 3, image: "/GFO-Fireball.png" },
  { id: 6, name: "Loafers", price: 85, rating: 4, image: "/GFO-Fireball.png" },
  { id: 7, name: "Slippers", price: 30, rating: 2, image: "/GFO-Fireball.png" },
];

export default function CategoryGrid() {
  const [products] = useState(PRODUCTS);
  const [visibleProducts, setVisibleProducts] = useState(PRODUCTS);
  const [quickView, setQuickView] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(15);

  /* ---------- APPLY SORT & SHOW ---------- */
  const handleApply = ({ sort, show }) => {
    let updatedProducts = [...products];

    switch (sort) {
      case "price-low-high":
        updatedProducts.sort((a, b) => a.price - b.price);
        break;

      case "price-high-low":
        updatedProducts.sort((a, b) => b.price - a.price);
        break;

      case "rating-high-low":
        updatedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;

      case "rating-low-high":
        updatedProducts.sort((a, b) => (a.rating || 0) - (b.rating || 0));
        break;

      default:
        updatedProducts = [...products];
    }

    setPerPage(show);
    setCurrentPage(1);
    setVisibleProducts(updatedProducts);
  };

  /* ---------- PAGINATION ---------- */
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedProducts = visibleProducts.slice(start, end);
  const totalPages = Math.ceil(visibleProducts.length / perPage);

  return (
    <>
      <CategoryToolbar
        onFilterClick={() => console.log("Filter clicked")}
        onApply={handleApply}
      />

      <div className="category-grid">
        {paginatedProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onQuickView={() => setQuickView(item)}
          />
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {quickView && (
        <QuickViewModal
          product={quickView}
          onClose={() => setQuickView(null)}
        />
      )}
    </>
  );
}
