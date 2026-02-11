"use client";
import { useWishlist } from "@/context/WishlistContext";
import WishlistCard from "@/components/cards/WishlistCard";
import "@/styles/wishlist.css";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="empty-text">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <WishlistCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
}
