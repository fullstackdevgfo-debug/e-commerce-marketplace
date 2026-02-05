"use client";
import "../../styles/homeShowcase.css";

export default function HeroBanners() {
  return (
    <section className="hero-banners">
      <div className="hero-grid">

        {/* LEFT BANNER */}
        <div className="hero-card left">
          <div className="overlay">
            <p>HANDBAG FOR WOMEN</p>
            <h3>SALE 50% OFF</h3>
            <a href="#">See More →</a>
          </div>
          <span className="arrow left-arrow">
            <i className="fa-solid fa-chevron-left"></i>
          </span>
        </div>

        {/* CENTER BANNER */}
        <div className="hero-card center">
          <div className="overlay center-text">
            <p>COLLECTION FOR WOMEN</p>
            <h2>Tropical Punch</h2>
            <a href="#">See More →</a>
          </div>
        </div>

        {/* RIGHT BANNER */}
        <div className="hero-card right">
          <div className="overlay">
            <p>HANDBAG FOR WOMEN</p>
            <h3>SALE 50% OFF</h3>
            <a href="#">See More →</a>
          </div>
          <span className="arrow right-arrow">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>

      </div>
    </section>
  );
}
