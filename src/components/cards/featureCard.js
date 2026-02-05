import { Heart, RefreshCw, Eye, ShoppingBasket, Star } from "lucide-react";
//
import "./styles/featureCard.css";

export const ProductCard = ({
  name,
  image,
  price,
  oldPrice,
  discount,
  rating = 0,
}) => {
  return (
    <div className="emarket-product-card">
      <div className="emarket-product-image">
        <a href="#">
          <img src={image} alt={name} />
        </a>
        {discount && (
          <span className="emarket-product-label">-{discount}%</span>
        )}
        <div className="emarket-product-actions">
          <button className="emarket-product-action-btn" title="Add to Cart">
            <ShoppingBasket size={18} />
          </button>
          <button
            className="emarket-product-action-btn"
            title="Add to Wishlist"
          >
            <Heart size={18} />
          </button>
          <button className="emarket-product-action-btn" title="Compare">
            <RefreshCw size={18} />
          </button>
          <button className="emarket-product-action-btn" title="Quick View">
            <Eye size={18} />
          </button>
        </div>
      </div>
      <div className="emarket-product-content">
        <a href="#" className="emarket-product-title">
          {name}
        </a>
        <div className="emarket-product-rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < rating ? "text-emarket-yellow active" : "text-emarket-gray"
              }
            />
          ))}
        </div>
        <div className="emarket-product-price">
          <span className="emarket-price-new">${price.toFixed(2)}</span>
          {oldPrice && (
            <span className="emarket-price-old">${oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};
