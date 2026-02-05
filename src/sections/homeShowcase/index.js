"use client";
import { useState } from "react";
import "../../styles/homeShowcase.css";

const banners = [
  {
    title: "Tropical Punch",
    subtitle: "COLLECTION FOR WOMEN",
    leftText: "HANDBAG FOR WOMEN",
    rightText: "HANDBAG FOR WOMEN",
    image: "/banner.webp",
  },
  {
    title: "Summer Vibes",
    subtitle: "NEW ARRIVALS",
    leftText: "SALE 40% OFF",
    rightText: "TRENDING NOW",
    image: "/GFO-Fireball.png",
  },
  {
    title: "Winter Drop",
    subtitle: "EXCLUSIVE",
    leftText: "LIMITED DEAL",
    rightText: "HOT PICKS",
    image: "/logo.webp",
  },
];

export default function HeroBanners() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const leftIndex = index === 0 ? banners.length - 1 : index - 1;
  const rightIndex = index === banners.length - 1 ? 0 : index + 1;

  return (
    <section className="hero-banners">
      <div className="hero-grid">

        {/* LEFT */}
        <div
          className="hero-card left"
          style={{ backgroundImage: `url(${banners[leftIndex].image})` }}
        >
          <div className="overlay">
            <p>{banners[leftIndex].leftText}</p>
            <h3>SALE 50% OFF</h3>
            <a href="#">See More →</a>
          </div>
          <span className="arrow left-arrow" onClick={prev}>‹</span>
        </div>

        {/* CENTER */}
        <div
          className="hero-card center"
          style={{ backgroundImage: `url(${banners[index].image})` }}
        >
          <div className="overlay center-text">
            <p>{banners[index].subtitle}</p>
            <h2>{banners[index].title}</h2>
            <a href="#">See More →</a>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="hero-card right"
          style={{ backgroundImage: `url(${banners[rightIndex].image})` }}
        >
          <div className="overlay">
            <p>{banners[rightIndex].rightText}</p>
            <h3>SALE 50% OFF</h3>
            <a href="#">See More →</a>
          </div>
          <span className="arrow right-arrow" onClick={next}>›</span>
        </div>

      </div>
    </section>
  );
}
