"use client";
import { useRef } from "react";
import "../../styles/categories.css";

const categories = [
  { title: "Towels Cloud", img: "/GFO-Fireball.png" },
  { title: "Smartphone", img: "/GFO-Fireball.png" },
  { title: "Watches", img: "/GFO-Fireball.png" },
  { title: "Electronics", img: "/GFO-Fireball.png" },
  { title: "Furnitures", img: "/GFO-Fireball.png" },
  { title: "Collections", img: "/GFO-Fireball.png" },
  { title: "Fashion", img: "/GFO-Fireball.png" },
    { title: "Towels Cloud", img: "/GFO-Fireball.png" },
  { title: "Smartphone", img: "/GFO-Fireball.png" },
  { title: "Watches", img: "/GFO-Fireball.png" },
  { title: "Electronics", img: "/GFO-Fireball.png" },
  { title: "Furnitures", img: "/GFO-Fireball.png" },
  { title: "Collections", img: "/GFO-Fireball.png" },
  { title: "Fashion", img: "/GFO-Fireball.png" },
];

export default function Categories() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="shop-category">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>SHOP BY CATEGORIES</h2>
          <div className="nav-arrows">
            <i className="fa-solid fa-arrow-left" onClick={slideLeft}></i>
            <i className="fa-solid fa-arrow-right" onClick={slideRight}></i>
          </div>
        </div>

        {/* Slider */}
        <div className="category-slider" ref={sliderRef}>
          {categories.map((item, i) => (
            <div className="category-box" key={i}>
              <div className="category-img">
                <img src={item.img} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
