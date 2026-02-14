"use client";

import { use, useState } from "react";
import {
  CategoryGrid,
  CategorySidebar,
  CategoryToolbar,
} from "@/sections/categories";

import "@/styles/category.css";

export default function CategoryPage({ params }) {
  const { id } = use(params);
  const categoryName = id.replace(/-/g, " ");

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section className="category-page">
      <div className="container">

        <div className="breadcrumb">
          Home › Category › <strong>{categoryName}</strong>
        </div>

        <div className="category-layout">

          {/* MAIN */}
          <div className="category-main">
            <h2 className="category-title">{categoryName}</h2>

            {/* <CategoryToolbar onFilterClick={() => setShowSidebar(true)} /> */}

            <CategoryGrid />
          </div>

          {/* SIDEBAR */}
          <CategorySidebar
            open={showSidebar}
            onClose={() => setShowSidebar(false)}
          />
        </div>

      </div>
    </section>
  );
}
