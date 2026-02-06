"use client";
import { useState } from "react";
import "../../styles/deals.css";
import { ProductCard } from "@/components";

/* ---------------- DEAL SLIDER DATA ---------------- */
const dealProducts = [
  {
    name: "Backpacks Stress",
    price: 73,
    oldPrice: 80,
    discount: "-9%",
    img: "/Gfo-Fireball.png",
    progress: 70,
  },
  {
    name: "Smart Refrigerator",
    price: 1200,
    oldPrice: 1350,
    discount: "-11%",
    img: "/Gfo-Fireball.png",
    progress: 55,
  },
  {
    name: "Washing Machine",
    price: 899,
    oldPrice: 999,
    discount: "-10%",
    img: "/Gfo-Fireball.png",
    progress: 40,
  },
];

/* ---------------- BEST SELLER DATA ---------------- */
const products = [
  { name: "Headphone", price: 94, image: "/Gfo-Fireball.png", category: "Electronics" },
  { name: "Sony Phone", price: 79, image: "/Gfo-Fireball.png", category: "Electronics" },
  { name: "Smart Watch", price: 57, image: "/Gfo-Fireball.png", category: "Electronics" },
  { name: "Belt Combo", price: 100, image: "/banner.webp", category: "Accessories" },
  { name: "Backpack", price: 69, image: "/Gfo-Fireball.png", category: "Accessories" },
  { name: "Top Wear", price: 58, image: "/logo.webp", category: "Fashion" },
  { name: "Jacket", price: 145, image: "/Gfo-Fireball.png", category: "Fashion" },
  { name: "Top Wear", price: 58, image: "/logo.webp", category: "Fashion" },
  { name: "Jacket", price: 145, image: "/Gfo-Fireball.png", category: "Fashion" },
];

export default function DealsOfWeek() {
  const [dealIndex, setDealIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("All");
  const [slideIndex, setSlideIndex] = useState(0);

  /* DEAL SLIDER */
  const deal = dealProducts[dealIndex];
  const prevDeal = () =>
    setDealIndex(dealIndex === 0 ? dealProducts.length - 1 : dealIndex - 1);
  const nextDeal = () =>
    setDealIndex((dealIndex + 1) % dealProducts.length);

  /* FILTER PRODUCTS */
  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category === activeTab);

  /* GROUP INTO SLIDES OF 8 */
  const slides = [];
  for (let i = 0; i < filteredProducts.length; i += 4) {
    slides.push(filteredProducts.slice(i, i + 4));
  }

  const prevSlide = () =>
    setSlideIndex(slideIndex === 0 ? slides.length - 1 : slideIndex - 1);
  const nextSlide = () =>
    setSlideIndex(slideIndex === slides.length - 1 ? 0 : slideIndex + 1);

  return (
    <section className="deals-section">
      <div className="container deals-wrapper">

        {/* ================= LEFT : DEALS OF THE WEEK ================= */}
        <div className="deals-left">
          <div className="section-head">
            <h3>DEALS OF THE WEEK</h3>
            <div className="arrows">
              <span onClick={prevDeal}>‹</span>
              <span onClick={nextDeal}>›</span>
            </div>
          </div>

          <div className="deal-card">
            <span className="discount">{deal.discount}</span>
            <img src={deal.img} alt={deal.name} />
            <h4>{deal.name}</h4>
            <p className="price">
              ${deal.price}.00 <span>${deal.oldPrice}.00</span>
            </p>

            <div className="progress-bar">
              <span style={{ width: `${deal.progress}%` }} />
            </div>

            <div className="timer">
              <div><strong>19</strong><small>DAYS</small></div>
              <div><strong>12</strong><small>HRS</small></div>
              <div><strong>02</strong><small>MINS</small></div>
              <div><strong>27</strong><small>SECS</small></div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT : BEST SELLER ================= */}
        <div className="deals-right">
          <div className="section-head">
            <h3>BEST SELLER</h3>

            <ul className="tabs desktop-tabs">
              {["All", "Accessories", "Electronics", "Fashion"].map((tab) => (
                <li
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => {
                    setActiveTab(tab);
                    setSlideIndex(0);
                  }}
                >
                  {tab === "All" ? "All Product" : tab}
                </li>
              ))}
            </ul>

            <div className="arrows">
              <span onClick={prevSlide}>‹</span>
              <span onClick={nextSlide}>›</span>
            </div>
          </div>

          {/* PRODUCT CAROUSEL */}
          <div className="products-carousel">
            <div
              className="products-track"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {slides.map((group, i) => (
                <div className="products-slide" key={i}>
                  {group.map((item, idx) => (
                    <ProductCard key={idx} {...item} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
