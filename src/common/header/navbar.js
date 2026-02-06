import { Menu, ChevronDown, User, MapPin, Phone, X } from "lucide-react";
import { navData } from "../../data/navData";
import { MegaMenu } from "./megamenu";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const closeMenu = () => setMenuOpen && setMenuOpen(false);

  return (
    <nav className="emarket-nav-bar">
      <div className="container">
        {/* <button className="all-categories-btn">
          <Menu size={20} />
          ALL CATEGORIES
          <ChevronDown size={16} className="ml-auto" />
        </button> */}

        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {/* Mobile Close Button */}
          <li className="mobile-only mobile-close-li">
            <button className="mobile-close-btn" onClick={closeMenu}>
              <X size={24} />
            </button>
          </li>

          {navData.map((item) => (
            <li className="nav-item" key={item.id}>
              <a href={item.path} className="nav-link" onClick={closeMenu}>
                {item.title}
                {item.hasMegaMenu && <ChevronDown size={14} />}
                {item.badge && (
                  <span className={`nav-badge ${item.badge.toLowerCase()}`}>
                    {item.badge}
                  </span>
                )}
              </a>
              {item.hasMegaMenu && <MegaMenu data={item} />}
            </li>
          ))}
        </ul>

        <div className="nav-right-info">
          <a href="#" className="info-item">
            <User size={16} />
            Login or Register
          </a>
          <a href="#" className="info-item">
            <MapPin size={16} />
            Track Your Order
          </a>
          <a href="tel:+1234567890" className="info-item">
            <Phone size={16} />
            Hotline (+123)4 567 890
          </a>
        </div>
      </div>
    </nav>
  );
};
