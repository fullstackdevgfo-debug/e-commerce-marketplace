import {
  Home,
  Search,
  ShoppingBasket,
  User,
  MoreHorizontal,
} from "lucide-react";

export const BottomNav = () => {
  return (
    <div className="emarket-bottom-nav">
      <a href="/" className="bottom-nav-item active">
        <Home size={22} />
        <span>HOME</span>
      </a>
      <a href="#" className="bottom-nav-item">
        <Search size={22} />
        <span>SEARCH</span>
      </a>
      <a href="#" className="bottom-nav-item">
        <div className="bottom-cart-icon">
          <ShoppingBasket size={22} />
          <span className="bottom-cart-badge">0</span>
        </div>
        <span>CART</span>
      </a>
      <a href="#" className="bottom-nav-item">
        <User size={22} />
        <span>MY ACCOUNT</span>
      </a>
      <a href="#" className="bottom-nav-item">
        <MoreHorizontal size={22} />
        <span>MORE</span>
      </a>
    </div>
  );
};
