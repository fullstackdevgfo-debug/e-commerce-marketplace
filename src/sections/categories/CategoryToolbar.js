"use client";

import { SlidersHorizontal, Grid2X2, Grid3X3 } from "lucide-react";

export default function CategoryToolbar({ onFilterClick, view, setView }) {
  return (
    <div className="category-toolbar">

      {/* LEFT */}
      <div className="toolbar-left">
        <button className="filter-btn" onClick={onFilterClick}>
          <SlidersHorizontal size={16} />
          <span>Filter</span>
        </button>
      </div>

      {/* RIGHT */}
      <div className="toolbar-right">
        <div className="toolbar-select">
          <label>Sort:</label>
          <select>
            <option>Default</option>
            <option>Price (Low → High)</option>
            <option>Price (High → Low)</option>
          </select>
        </div>

        <div className="toolbar-select">
          <label>Show:</label>
          <select>
            <option>15</option>
            <option>30</option>
          </select>
        </div>
      </div>
    </div>
  );
}
