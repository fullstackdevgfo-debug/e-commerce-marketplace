"use client";
import { ProductCard } from "@/components/cards";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const tabs = ["Best sellers", "New Arrivals", "Most Rating"];

const products = [
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 3199,
    oldPrice: 4000,
    discount: 6,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 3199,
    oldPrice: 4000,
    discount: 8,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 3199,
    oldPrice: 4000,
    discount: 10,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 3199,
    oldPrice: 4000,
    discount: 11,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 4000,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 4000,
    rating: 0,
  },
];

export const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("Best sellers");

  return (
    <div className="emarket-featured-products">
      <div className="container">
        <div className="emarket-section-header">
          <div className="emarket-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`emarket-tab ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="emarket-section-nav">
            <button className="emarket-carousel-nav">
              <ChevronLeft size={18} />
            </button>
            <button className="emarket-carousel-nav">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="emarket-product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
