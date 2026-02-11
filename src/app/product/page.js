"use client";

import { useState } from "react";
import ProductCard from "@/components/cards/ProductCard";
import { CategorySidebar } from "@/sections/categories";
import "@/styles/categoryGrid.css";

const products = [
  {
    id: 1,
    name: "GFO Fireball",
    image: "/GFO-Fireball.png",
    price: 77,
    oldPrice: 88,
    discount: 17,
    rating: 4,
  },
  {
    id: 2,
    name: "Automatic Fire Extinguisher",
    image: "/GFO-Fireball.png",
    price: 99,
    oldPrice: 120,
    discount: 18,
    rating: 5,
  },
  {
    id: 3,
    name: "Fire Safety Kit",
    image: "/GFO-Fireball.png",
    price: 149,
    oldPrice: 179,
    discount: 16,
    rating: 4,
  },
];

export default function ProductsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="category-page">

      {/* HEADER */}
      <div className="category-header">
        <h1>All Products</h1>

        <button
          className="filter-btn"
          onClick={() => setSidebarOpen(true)}
        >
          Filter
        </button>
      </div>

      <div className="category-layout">
        {/* PRODUCTS GRID */}
        <div className="category-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* RIGHT SIDEBAR */}
        <CategorySidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </div>
    </div>
  );
}
