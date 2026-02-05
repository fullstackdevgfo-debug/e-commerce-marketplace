"use client";
import { ProductCard } from "@/components/cards";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const tabs = ["Best sellers", "New Arrivals", "Most Rating"];

const products = [
  {
    name: "Benderloin officia",
    image:
      "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/1-300x300.jpg",
    price: 77,
    oldPrice: 82,
    discount: 6,
    rating: 0,
  },
  {
    name: "Bresaola tongued",
    image:
      "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/id-update/Electronics/1-300x300.jpg",
    price: 74,
    oldPrice: 80,
    discount: 8,
    rating: 0,
  },
  {
    name: "Beef ribs prosciutto",
    image:
      "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/3-300x300.jpg",
    price: 80,
    oldPrice: 89,
    discount: 10,
    rating: 0,
  },
  {
    name: "Ball tip prosciutto",
    image:
      "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/4-300x300.jpg",
    price: 68,
    oldPrice: 76,
    discount: 11,
    rating: 0,
  },
  {
    name: "Lommodo quiutvenia",
    image:
      "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/7-270x270.jpg",
    price: 72,
    rating: 0,
  },
  {
    name: "Ninim spareri magna",
    image:
      "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/demo/product/index2/19-270x270.jpg",
    price: 94,
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
