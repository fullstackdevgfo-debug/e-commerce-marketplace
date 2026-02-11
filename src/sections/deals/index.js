"use client";

import { useState, useEffect } from "react";
import "../../styles/deals.css";
import ProductCard from "@/components/cards/ProductCard";
import { useRouter } from "next/navigation";

/* ---------------- PRODUCTS ---------------- */
const products = [
  { id: "p1", name: "Headphone", price: 94, image: "/Gfo-Fireball.png", category: "Electronics", rating: 4 },
  { id: "p2", name: "Sony Phone", price: 79, image: "/Gfo-Fireball.png", category: "Electronics", rating: 5 },
  { id: "p3", name: "Smart Watch", price: 57, image: "/Gfo-Fireball.png", category: "Electronics", rating: 3 },
  { id: "p4", name: "Belt Combo", price: 100, image: "/banner.webp", category: "Accessories", rating: 4 },
  { id: "p5", name: "Backpack", price: 69, image: "/Gfo-Fireball.png", category: "Accessories", rating: 4 },
  { id: "p6", name: "Top Wear", price: 58, image: "/logo.webp", category: "Fashion", rating: 5 },
  { id: "p7", name: "Jacket", price: 145, image: "/Gfo-Fireball.png", category: "Fashion", rating: 4 },
  { id: "p8", name: "Top Wear 2", price: 58, image: "/logo.webp", category: "Fashion", rating: 4 },
  { id: "p9", name: "Jacket 2", price: 145, image: "/Gfo-Fireball.png", category: "Fashion", rating: 5 },
];

/* ---------------- DEALS ---------------- */
const dealProducts = [
  {
    id: "d1",
    name: "Backpacks Stress",
    price: 73,
    oldPrice: 80,
    discount: "-9%",
    img: "/Gfo-Fireball.png",
    progress: 70,
    expiresInDays: 3,
  },
  {
    id: "d2",
    name: "Smart Refrigerator",
    price: 1200,
    oldPrice: 1350,
    discount: "-11%",
    img: "/Gfo-Fireball.png",
    progress: 55,
    expiresInDays: 2,
  },
];

export default function DealsOfWeek() {
  const router = useRouter();

  const [dealIndex, setDealIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("All");
  const [slideIndex, setSlideIndex] = useState(0);

  const deal = dealProducts[dealIndex];

  /* ---------------- COUNTDOWN ---------------- */
  const [endTime, setEndTime] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + deal.expiresInDays);
    return date;
  });

  const calculateTimeLeft = () => {
    const diff = endTime - new Date();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + deal.expiresInDays);
    setEndTime(date);
  }, [dealIndex]);

  /* ---------------- FILTER PRODUCTS ---------------- */
  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category === activeTab);

  /* GROUP PRODUCTS INTO SLIDES OF 4 */
  const slides = [];
  for (let i = 0; i < filteredProducts.length; i += 4) {
    slides.push(filteredProducts.slice(i, i + 4));
  }

  return (
    <section className="deals-section">
      <div className="container deals-wrapper">

        {/* LEFT DEAL */}
        <div className="deals-left">
          <div className="section-head">
            <h3>DEALS OF THE WEEK</h3>
            <div className="arrows">
              <span onClick={() => setDealIndex(dealIndex === 0 ? dealProducts.length - 1 : dealIndex - 1)}>‹</span>
              <span onClick={() => setDealIndex((dealIndex + 1) % dealProducts.length)}>›</span>
            </div>
          </div>

          <div className="deal-card">
            <span className="discount">{deal.discount}</span>

            <img
              src={deal.img}
              alt={deal.name}
              className="cursor-pointer"
              onClick={() => router.push(`/product/${deal.id}`)}
            />

            <h4>{deal.name}</h4>

            <p className="price">
              ${deal.price} <span>${deal.oldPrice}</span>
            </p>

            <div className="progress-bar">
              <span style={{ width: `${deal.progress}%` }} />
            </div>

            {/* COUNTDOWN */}
            <div className="timer">
              <div>
                <strong>{timeLeft.days}</strong>
                <small>DAYS</small>
              </div>
              <div>
                <strong>{timeLeft.hours}</strong>
                <small>HRS</small>
              </div>
              <div>
                <strong>{timeLeft.minutes}</strong>
                <small>MINS</small>
              </div>
              <div>
                <strong>{timeLeft.seconds}</strong>
                <small>SECS</small>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BEST SELLER */}
        <div className="deals-right">
          <div className="section-head">
            <h3>BEST SELLER</h3>

            {/* DESKTOP TABS */}
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

            {/* MOBILE DROPDOWN */}
            <div className="mobile-tabs">
              <select
                value={activeTab}
                onChange={(e) => {
                  setActiveTab(e.target.value);
                  setSlideIndex(0);
                }}
              >
                <option value="All">All Product</option>
                <option value="Accessories">Accessories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>

            <div className="arrows">
              <span onClick={() => setSlideIndex(slideIndex === 0 ? slides.length - 1 : slideIndex - 1)}>‹</span>
              <span onClick={() => setSlideIndex(slideIndex === slides.length - 1 ? 0 : slideIndex + 1)}>›</span>
            </div>
          </div>

          {/* PRODUCT SLIDER */}
          <div className="products-carousel">
            <div
              className="products-track"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {slides.map((group, i) => (
                <div className="products-slide" key={i}>
                  {group.map((item) => (
                    <ProductCard key={item.id} product={item} />
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
