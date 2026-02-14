"use client";

import { useEffect, useState } from "react";
import "../../styles/homeShowcase.css";
// dummy slides - replace with API calls in real app
const slides = [
  { image: "https://blog.greenwgroup.com/wp-content/uploads/2024/05/fire-safety-training-banner-.jpg" },
  { image: "https://blog.greenwgroup.com/wp-content/uploads/2024/04/fire-safety-first-aid-training-blog-banner-.jpg" },
  { image: "https://blog.greenwgroup.com/wp-content/uploads/2023/09/1450-X-500_In_house_Training_First_Aid_Fire_safety_08_Sep_2023_.jpg" },
  { image: "https://www.greenwgroup.com/wp-content/uploads/2024/05/poster.jpg" }
];

export default function HeroBanners() {
  const [active, setActive] = useState(0);
// Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-bg ${active === i ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Dots only */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}