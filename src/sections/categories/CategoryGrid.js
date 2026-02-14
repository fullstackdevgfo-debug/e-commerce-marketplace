"use client";

import { useState } from "react";
import ProductCard from "@/components/cards/ProductCard";
import CategoryToolbar from "./CategoryToolbar";
import QuickViewModal from "@/components/QuickViewModal/QuickViewModal";
import "@/styles/categoryGrid.css";
// dummy data - replace with API calls in real app
const PRODUCTS = [
  { id: 1, name: "Fire Ball", price: 77, rating: 4, image: "/GFO-Fireball.png" },
  { id: 2, name: "Smart Smoke Detectors", price: 62, rating: 3, image: "https://gfofireequipments.com/wp-content/uploads/2025/11/Smart-Smoke-Detector.jpg" },
  { id: 3, name: "Gas Detectors", price: 99, rating: 5, image: "https://gfofireequipments.com/wp-content/uploads/2025/12/LPG-Gas-Detector-e1764909028605.jpg" },
  { id: 4, name: "Smoke Detectors", price: 120, rating: 4, image: "https://gfofireequipments.com/wp-content/uploads/2025/11/Smoke-Detector.jpg" },
  { id: 5, name: "Vehicle Fire Safety Device", price: 45, rating: 3, image: "https://gfofireequipments.com/wp-content/uploads/2025/11/Vehicle-Safety-Device.jpg" },
  { id: 6, name: "GFO EB Device", price: 85, rating: 4, image: "https://gfofireequipments.com/wp-content/uploads/2025/02/EB-Device-1.jpg" },
  { id: 7, name: "GFO Smart Device", price: 30, rating: 2, image: "https://gfofireequipments.com/wp-content/uploads/2025/02/Smart-Display.jpg" },
];

export default function CategoryGrid() {
  const [products] = useState(PRODUCTS);
  const [visibleProducts, setVisibleProducts] = useState(PRODUCTS);
  const [quickView, setQuickView] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(15);

// handle sorting and show count changes from toolbar
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

// pagination logic
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
