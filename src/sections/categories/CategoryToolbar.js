"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function CategoryToolbar({ onFilterClick, onApply }) {
  const [sort, setSort] = useState("default");
  const [show, setShow] = useState(15);

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
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-low-high">Price (Low → High)</option>
            <option value="price-high-low">Price (High → Low)</option>
            <option value="rating-high-low">Rating (High → Low)</option>
            <option value="rating-low-high">Rating (Low → High)</option>
          </select>
        </div>

        <div className="toolbar-select">
          <label>Show:</label>
          <select value={show} onChange={(e) => setShow(+e.target.value)}>
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={15}>15</option>
            <option value={30}>30</option>
          </select>
        </div>

        <button className="apply-btn" onClick={() => onApply({ sort, show })}>
          Apply
        </button>
      </div>
    </div>
  );
}
