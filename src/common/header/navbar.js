// import { Menu, ChevronDown, User, MapPin, Phone, X } from "lucide-react";
// // import { navData } from "../../data/navData";
// // import { MegaMenu } from "./megamenu";

// export const Navbar = ({ menuOpen, setMenuOpen }) => {
//   const closeMenu = () => setMenuOpen && setMenuOpen(false);

//   return (
//     <nav className="emarket-nav-bar">
//       <div className="container">
//         {/* <button className="all-categories-btn">
//           <Menu size={20} />
//           ALL CATEGORIES
//           <ChevronDown size={16} className="ml-auto" />
//         </button> */}

//         <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
//           {/* Mobile Close Button */}
//           <li className="mobile-only mobile-close-li">
//             <button className="mobile-close-btn" onClick={closeMenu}>
//               <X size={24} />
//             </button>
//           </li>

//           <li className="nav-item">
//             <a href="#" className="nav-link" onClick={closeMenu}>
//               Best Sellers
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link" onClick={closeMenu}>
//               Top Deals
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="/blog" className="nav-link" onClick={closeMenu}>
//               Blog
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="/about" className="nav-link" onClick={closeMenu}>
//               About Us
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="/contact" className="nav-link" onClick={closeMenu}>
//               Contact
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="/education/register" className="nav-link" onClick={closeMenu}>
//               Education
//             </a>
//           </li>
//         </ul>

//         <div className="nav-right-info">
//           <a href="#" className="info-item">
//             <User size={16} />
//             Login or Register
//           </a>
//           <a href="#" className="info-item">
//             <MapPin size={16} />
//             Track Your Order
//           </a>
//           <a href="tel:+1234567890" className="info-item">
//             <Phone size={16} />
//             Hotline (+123)4 567 890
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };










"use client";

import { Menu, ChevronDown, User, MapPin, Phone, X } from "lucide-react";
import { useRouter } from "next/navigation";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const router = useRouter();

  const closeMenu = () => setMenuOpen && setMenuOpen(false);

  const handleEducationClick = () => {
    closeMenu();

    const eduUser = localStorage.getItem("edu_user");

    if (eduUser) {
      // already registered
      router.push("/education");
    } else {
      // not registered
      router.push("/education/register");
    }
  };

  return (
    <nav className="emarket-nav-bar">
      <div className="container">
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li className="mobile-only mobile-close-li">
            <button className="mobile-close-btn" onClick={closeMenu}>
              <X size={24} />
            </button>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeMenu}>
              Best Sellers
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeMenu}>
              Top Deals
            </a>
          </li>

          <li className="nav-item">
            <a href="/blog" className="nav-link" onClick={closeMenu}>
              Blog
            </a>
          </li>

          <li className="nav-item">
            <a href="/about" className="nav-link" onClick={closeMenu}>
              About Us
            </a>
          </li>

          <li className="nav-item">
            <a href="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>

          {/* ✅ SMART EDUCATION LINK */}
          <li className="nav-item">
            <button className="nav-link" onClick={handleEducationClick}>
              Education
            </button>
          </li>
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