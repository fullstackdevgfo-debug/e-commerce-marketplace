"use client";

import { useEffect, useState } from "react";
import "../../styles/hero.css";
// dummy slides - replace with API calls in real app
const slides = [
  {
    title: "HOT RIGHT NOW",
    text: `Summer whites and bright tropical prints
capture a breezy, island vibe.`,
    image: "/banner1.png",
  },
  {
    title: "BEST DEALS",
    text: `Limited time offers
on top brands.`,
    image: "/banner3.png",
  },
  {
    title: "HOT RIGHT NOW",
    text: `Summer whites and bright tropical prints
capture a breezy, island vibe.`,
    image: "/banner4.png",
  },
  {
    title: "NEW ARRIVALS",
    text: `Discover fresh styles and
exclusive collections.`,
    image: "/banner5.png",
  },
  {
    title: "BEST DEALS",
    text: `Limited time offers
on top brands.`,
    image: "/banner6.png",
  },
];

export const Hero = () => {
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
      {/* Background images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-bg ${active === i ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="container">
        <div key={active} className="hero-content">
          <h1 className="hero-title">{slides[active].title}</h1>
          <p className="hero-text">
            {slides[active].text.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <button className="hero-btn">Shop now</button>
        </div>
      </div>

      {/* Dots */}
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
};