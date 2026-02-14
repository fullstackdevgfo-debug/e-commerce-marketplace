"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Search,
  Heart,
  RefreshCw,
  ShoppingBasket,
  Menu,
  X,
} from "lucide-react";

export const Header = ({ menuOpen, setMenuOpen }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  /* ---------------- LOAD CART ---------------- */
  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    setCartCount(count);
    setCartTotal(total);
  };

  useEffect(() => {
    loadCart();

    // Sync across tabs & updates
    window.addEventListener("storage", loadCart);
    return () => window.removeEventListener("storage", loadCart);
  }, []);

  return (
    <div className="emarket-main-header">
      <div className="container">
        {/* Logo */}
        <Link href="/" className="emarket-logo">
          <img src="/logo.webp" alt="logo" />
        </Link>

        {/* Search */}
        <div className="emarket-search-container">
          <div className="emarket-search-box">
            <select className="emarket-search-select">
              <option>All Category</option>
              <option>Fire Extinguisher</option>
              <option>Fire Ball</option>
              <option>Smoke Detector</option>
              <option>Smart Product</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="emarket-search-input"
            />
            <button className="emarket-search-btn">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="header-actions">
          <button className="action-icon-btn">
            <RefreshCw size={22} />
          </button>

          {/* Wishlist */}
          <Link href="/wishlist" className="action-icon-btn">
            <Heart size={22} />
          </Link>

          {/* Cart */}
          <Link href="/cart" className="cart-wrapper">
            <div className="cart-icon-container">
              <ShoppingBasket size={28} />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </div>
            <div className="cart-text">
              <span className="cart-label">MY CART</span>
              <span className="cart-value">
                ₹ {cartTotal.toLocaleString()}
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  );
};
