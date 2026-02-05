"use client";
import { useState } from "react";
import "./header.css";
import { TopTags } from "./topTags";
import { TopPromotionalBar } from "./topPromotionalBar";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { BottomNav } from "./bottomNav";

export const CommonHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Overlay for mobile menu */}
      <div
        className={`nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* ===== TOP PROMO BAR ===== */}
      <TopPromotionalBar />

      <div className="emarket-sticky-header">
        {/* ===== HEADER CENTER (LOGO, SEARCH, ACTIONS) ===== */}
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* ===== NAVIGATION BAR ===== */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* ===== TOP TAGS ===== */}
      <TopTags />

      {/* ===== BOTTOM NAVIGATION (Mobile Only) ===== */}
      <BottomNav />
    </>
  );
};
