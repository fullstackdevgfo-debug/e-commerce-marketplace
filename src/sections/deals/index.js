"use client";

import { useState, useEffect, useRef } from "react";
import "../../styles/deals.css";
import ProductCard from "@/components/cards/ProductCard";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
// dummy data - replace with API calls in real app
const products = [
  {
    id: "p1",
    name: "Automatic FireBall",
    price: 3100,
    oldPrice : 3699,
    image: "/Gfo-Fireball.png",
    category: "Fireball",
    rating: 4,
  },
  {
    id: "p2",
    name: "Smart Smoke Detectors",
    price: 699,
    oldPrice : 3699,
    image: "https://gfofireequipments.com/wp-content/uploads/2025/11/Smart-Smoke-Detector.jpg",
    category: "Smart",
    rating: 5,
  },
  {
    id: "p3",
    name: "LPG Gas Detectors",
    price: 2500,
    oldPrice : 3699,
    image: "https://gfofireequipments.com/wp-content/uploads/2025/12/LPG-Gas-Detector-e1764909028605.jpg",
    category: "Smart",
    rating: 3,
  },
  {
    id: "p4",
    name: "Electric Board Device",
    price: 799,
    oldPrice : 3699,
    image: "https://gfofireequipments.com/wp-content/uploads/2025/02/EB-Device-1.jpg",
    category: "Fireball",
    rating: 4,
  },
  {
    id: "p5",
    name: "Smart Display",
    price: 7999,
    oldPrice : 3699,
    image: "https://gfofireequipments.com/wp-content/uploads/2025/02/Smart-Display.jpg",
    category: "Samrt",
    rating: 4,
  },
  {
    id: "p6",
    name: "Vehicle Fire Safety Device",
    price: 699,
    oldPrice : 3699,
    image: "https://gfofireequipments.com/wp-content/uploads/2025/11/Vehicle-Safety-Device.jpg",
    category: "Fireball",
    rating: 5,
  },
  {
    id: "p7",
    name: "Smart Water Sprinkler with AI Camera",
    price: 78999,
    oldPrice : 3699,
    image: "https://gfofireequipments.com/wp-content/uploads/2025/12/ChatGPT-Image-Dec-4-2025-06_17_48-PM.png",
    category: "Smart",
    rating: 4,
  },
  {
    id: "p8",
    name: "Modular",
    price: 19999,
    oldPrice : 3699,
    image: "https://m.media-amazon.com/images/I/51b76IlmjaL._SX679_.jpg",
    category: "Modular",
    rating: 4,
  },
  {
    id: "p9",
    name: "Fireball",
    price: 2100,
    oldPrice : 3699,
    image: "/Gfo-Fireball.png",
    category: "Fireball",
    rating: 5,
  },
];

// dummy deal products - replace with API calls in real app
const dealProducts = [
  {
    id: "d1",
    name: "Automatic FireBall",
    price: 3100,
    oldPrice: 4599,
    discount: "-9%",
    img: "/Gfo-Fireball.png",
    progress: 70,
    expiresInDays: 3,
  },
  {
    id: "d2",
    name: "Smart Automatic FireBall",
    price: 78000,
    oldPrice: 100000,
    discount: "-11%",
    img: "/Gfo-Fireball.png",
    progress: 55,
    expiresInDays: 2,
  },
];

export default function DealsOfWeek() {
  const router = useRouter();
  const swiperRef = useRef(null);
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
            <div className="flex gap-2">
              <button
                className="emarket-carousel-nav"
                onClick={() =>
                  setDealIndex(
                    dealIndex === 0 ? dealProducts.length - 1 : dealIndex - 1,
                  )
                }
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                className="emarket-carousel-nav"
                onClick={() =>
                  setDealIndex((dealIndex + 1) % dealProducts.length)
                }
              >
                <ChevronRight className="w-5 h-5" />
              </button>
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
              ₹{deal.price} <span>₹{deal.oldPrice}</span>
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
              {["All", "Smart", "Modular", "Fireball"].map((tab) => (
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
            <div className="flex gap-2">
              <button
                className="emarket-carousel-nav"
                onClick={() =>
                  setSlideIndex(
                    slideIndex === 0 ? slides.length - 1 : slideIndex - 1,
                  )
                }
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                className="emarket-carousel-nav"
                onClick={() =>
                  setSlideIndex(
                    slideIndex === slides.length - 1 ? 0 : slideIndex + 1,
                  )
                }
              >
                <ChevronRight className="w-5 h-5" />
              </button>
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
