"use client";

import { useState } from "react";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/cards/ProductCard";

export default function WishlistCard({ product }) {
  const { removeFromWishlist } = useWishlist();

  return (
    <>
      {/* Compact Wishlist Card */}
      <div className="wishlist-card">
        <ProductCard product={product} onClose={() => setQuickView(false)} />
        {/* <div className="wishlist-info">
          <button
            className="remove-btn"
            onClick={() => removeFromWishlist(product.id)}
          >
            Remove
          </button>
        </div> */}
      </div>
    </>
  );
}
