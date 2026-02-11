"use client";
import { useState } from "react";
import "@/styles/category.css";

export default function CategorySidebar({ open, onClose }) {
  const [collapse, setCollapse] = useState({
    sub: true,
    brand: true,
    color: true,
    price: true,
  });

  const toggle = (key) =>
    setCollapse((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <aside className={`category-sidebar ${open ? "open" : ""}`}>
        {/* HEADER */}
        <div className="sidebar-header">
          <h3>Shop By</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fa fa-times" />
          </button>
        </div>

        {/* BODY */}
        <div className="sidebar-content">

          {/* SEARCH */}
          <div className="filter-box">
            <div className="filter-title static">Search</div>
            <input className="sidebar-input" placeholder="Search products..." />
          </div>

          {/* SUBCATEGORY */}
          <div className="filter-box">
            <div className="filter-title" onClick={() => toggle("sub")}>
              <span>SubCategory</span>
              <i className={`fa fa-chevron-${collapse.sub ? "up" : "down"}`} />
            </div>

            {collapse.sub && (
              <ul className="sidebar-list">
                <li><span>Lamp & Lighting</span><span>4</span></li>
                <li><span>Furniture & Decors</span><span>5</span></li>
                <li><span>Sound & Life</span></li>
                <li><span>Sofa & Chairs</span><span>5</span></li>
              </ul>
            )}
          </div>

          {/* MANUFACTURER */}
          <div className="filter-box">
            <div className="filter-title" onClick={() => toggle("brand")}>
              <span>Manufacturer</span>
              <i className={`fa fa-chevron-${collapse.brand ? "up" : "down"}`} />
            </div>

            {collapse.brand && (
              <ul className="sidebar-list">
                <li><span>HTC</span><span>3</span></li>
                <li><span>Hewlett-Packard</span><span>5</span></li>
                <li><span>Apple</span><span>10</span></li>
              </ul>
            )}
          </div>

          {/* COLOR */}
          <div className="filter-box">
            <div className="filter-title" onClick={() => toggle("color")}>
              <span>Color</span>
              <i className={`fa fa-chevron-${collapse.color ? "up" : "down"}`} />
            </div>

            {collapse.color && (
              <ul className="sidebar-list">
                <li><span>Blue</span><span>3</span></li>
                <li><span>Pink</span><span>3</span></li>
                <li><span>Yellow</span><span>3</span></li>
                <li><span>Silver</span><span>3</span></li>
              </ul>
            )}
          </div>

          {/* PRICE */}
          <div className="filter-box">
            <div className="filter-title">
              <span>Price</span>
              <i className={`fa fa-chevron`} />
            </div>

            {collapse.price && (
              <div className="price-range">
                <div className="price-input">
                  <span>$</span>
                  <input type="number" defaultValue="39" />
                </div>
                <div className="price-input">
                  <span>$</span>
                  <input type="number" defaultValue="100" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="sidebar-footer">
          <button className="reset-btn">Reset</button>
          <button className="apply-btn">Apply</button>
        </div>
      </aside>

      {open && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  );
}
