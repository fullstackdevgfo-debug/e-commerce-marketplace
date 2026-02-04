import "./header.css";

export const CommonHeader = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          {/* Logo */}
          <div className="logo">
            <div className="logo-text">
              <img src="/logo.webp" alt="logo" />
            </div>
          </div>
          {/* Search Bar */}
          <div className="search-bar">
            <select className="category-select">
              <option>All Category</option>
              <option>Electronics</option>
              <option>Fashions</option>
              <option>Furniture</option>
              <option>Accessories</option>
            </select>
            <input type="text" className="search-input" placeholder="Search" />
            <button className="search-btn">
              <i className="fas fa-search" />
            </button>
          </div>
          {/* Header Actions */}
          <div className="header-actions">
            <button className="icon-btn">
              <i className="fas fa-sync-alt" />
            </button>
            <button className="icon-btn">
              <i className="fas fa-heart" />
            </button>
            <div className="cart-btn">
              <i className="fas fa-shopping-cart" />
              <span className="cart-badge">0</span>
              <div className="cart-info">
                <span className="cart-label">MY CART</span>
                <span className="cart-price">- $0.00</span>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <nav className="main-nav">
          <div className="nav-left">
            <button className="categories-btn">
              <i className="fas fa-bars" />
              ALL CATEGORIES
              <i className="fas fa-chevron-down" />
            </button>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link">
                HOME <i className="fas fa-chevron-down" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                PAGES <i className="fas fa-chevron-down" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                BLOG
                <span className="badge badge-hot">Hot!</span>
                <i className="fas fa-chevron-down" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                SHOP <i className="fas fa-chevron-down" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                COLLECTIONS
                <span className="badge badge-new">New</span>
                <i className="fas fa-chevron-down" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                SPECIALS!
              </a>
            </li>
          </ul>
          <div className="nav-right">
            <a href="#" className="auth-link">
              <i className="fas fa-lock" />
              Login or Register
            </a>
            <a href="tel:+1234567890" className="hotline">
              <i className="fas fa-phone" />
              Hotline (+12)34 567 890
            </a>
          </div>
        </nav>
        {/* Top Tags */}
        <div className="top-tags">
          <span className="tag-label">Top Tags:</span>
          <a href="#" className="tag">
            Fashions
          </a>
          <a href="#" className="tag">
            Electronic
          </a>
          <a href="#" className="tag">
            Furniture
          </a>
          <a href="#" className="tag">
            Accessories
          </a>
          <a href="#" className="tag">
            Shoes
          </a>
          <a href="#" className="tag">
            Smartphone
          </a>
          <a href="#" className="tag">
            Cellphone
          </a>
          <a href="#" className="tag">
            Cameras
          </a>
          <a href="#" className="tag">
            Latops
          </a>
          <a href="#" className="tag">
            Tablets
          </a>
          <a href="#" className="tag">
            Makeup
          </a>
          <a href="#" className="tag">
            iPhone
          </a>
        </div>
      </div>
    </header>
  );
};
