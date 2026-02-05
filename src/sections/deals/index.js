"use client";
import { useState } from "react";
import "../../styles/deals.css";

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
  { name: "Headphone", price: 94, img: "/Gfo-Fireball.png", category: "Electronics" },
  { name: "Sony Phone", price: 79, img: "/Gfo-Fireball.png", category: "Electronics" },
  { name: "Smart Watch", price: 57, img: "/Gfo-Fireball.png", category: "Electronics" },

  { name: "Belt Combo", price: 100, img: "/banner.webp", category: "Accessories" },
  { name: "Backpack", price: 69, img: "/Gfo-Fireball.png", category: "Accessories" },

  { name: "Top Wear", price: 58, img: "/logo.webp", category: "Fashion" },
  { name: "Jacket", price: 145, img: "/Gfo-Fireball.png", category: "Fashion" },
];

export default function DealsOfWeek() {
  /* ---------------- STATES ---------------- */
  const [dealIndex, setDealIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("All");

  /* ---------------- DEAL SLIDER ---------------- */
  const prevDeal = () =>
    setDealIndex(dealIndex === 0 ? dealProducts.length - 1 : dealIndex - 1);

  const nextDeal = () =>
    setDealIndex((dealIndex + 1) % dealProducts.length);

  const deal = dealProducts[dealIndex];

  /* ---------------- FILTER PRODUCTS ---------------- */
  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category === activeTab);

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
              <div>
                <strong>19</strong>
                <small>DAYS</small>
              </div>
              <div>
                <strong>12</strong>
                <small>HRS</small>
              </div>
              <div>
                <strong>02</strong>
                <small>MINS</small>
              </div>
              <div>
                <strong>27</strong>
                <small>SECS</small>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT : BEST SELLER ================= */}
        <div className="deals-right">
          <div className="section-head">
            <h3>BEST SELLER</h3>

            {/* Desktop Tabs */}
            <ul className="tabs desktop-tabs">
              {["All", "Accessories", "Electronics", "Fashion"].map((tab) => (
                <li
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "All" ? "All Product" : tab}
                </li>
              ))}
            </ul>

            {/* Mobile Dropdown */}
            <div className="mobile-tabs">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
              >
                <option value="All">All Product</option>
                <option value="Accessories">Accessories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map((item, i) => (
              <div className="product-card" key={i}>
                <img src={item.img} alt={item.name} />
                <h5>{item.name}</h5>
                <p className="price">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
