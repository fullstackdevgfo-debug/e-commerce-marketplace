import {
  Search,
  Heart,
  RefreshCw,
  ShoppingBasket,
  Menu,
  X,
} from "lucide-react";

export const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="emarket-main-header">
      <div className="container">
        {/* Logo */}
        <a href="/" className="emarket-logo">
          <img src="/logo.webp" alt="logo" />
        </a>

        {/* Search Box */}
        <div className="emarket-search-container">
          <div className="emarket-search-box">
            <select className="emarket-search-select">
              <option>All Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Furniture</option>
              <option>Accessories</option>
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

        {/* Header Actions */}
        <div className="header-actions">
          <button className="action-icon-btn">
            <RefreshCw size={22} />
          </button>

          <button className="action-icon-btn">
            <Heart size={22} />
          </button>

          <div className="cart-wrapper">
            <div className="cart-icon-container">
              <ShoppingBasket size={28} />
              <span className="cart-badge">0</span>
            </div>
            <div className="cart-text">
              <span className="cart-label">MY CART</span>
              <span className="cart-value">$0.00</span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle Button (Visible only on mobile via CSS) */}
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
