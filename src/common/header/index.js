"use client";

import { useState } from "react";
import "./header.css";

export const CommonHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* ===== TOP HEADER ===== */}
        <div className="header-top">
          {/* Logo */}
          <div className="logo">
            <img src="/logo.webp" alt="logo" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
          </button>

          {/* Search */}
          
          <div className="search-bar">
            <select className="category-select">
              <option>All Category</option>
              <option>Electronics</option>
              <option>Fashions</option>
              <option>Furniture</option>
              <option>Accessories</option>
            </select>

            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
            />

            <button className="search-btn">
              <i className="fas fa-search " />
            </button>
          </div>

          {/* Actions */}
          <div className="header-actions">
            <button className="icon-btn">
              <i className="fas fa-sync-alt" />
            </button>

            <button className="icon-btn">
              <i className="fas fa-heart" />
            </button>

            <div className="cart-btn">
              <div className="cart-icon">
              <i className="fas fa-shopping-cart" />
              </div>
              <span className="cart-badge">0</span>
              <div className="cart-info">
                <span className="cart-label">MY CART</span>
                <span className="cart-price">₹ 0.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== NAVIGATION ===== */}
        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <div className="nav-left">
            <select className="category-select-1">
              <option>All Category</option>
              <option>Electronics</option>
              <option>Fashions</option>
              <option>Furniture</option>
              <option>Accessories</option>
            </select>
          </div>

          <ul className="nav-menu">
            {["Home", "Pages", "Blog", "Shop", "Collections", "Specials!"].map(
              (item) => (
                <li key={item} className="nav-item">
                  <a href="#" className="nav-link">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="nav-right">
            <a href="#" className="auth-link">
              <i className="fas fa-lock" /> Login / Register
            </a>

            <a href="tel:+917891234567" className="hotline">
              <i className="fas fa-phone" /> (+91) 7891234567
            </a>
          </div>
        </nav>

        {/* ===== TAGS ===== */}
        <div className="top-tags">
          <span className="tag-label">Top Tags:</span>
          {[
            "Fashion",
            "Electronics",
            "Furniture",
            "Accessories",
            "Shoes",
            "iPhone",
            "Cameras",
            "Tablets",
          ].map((tag) => (
            <a key={tag} href="#" className="tag">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
