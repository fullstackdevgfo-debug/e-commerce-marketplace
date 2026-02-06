import { Facebook } from "lucide-react";
import "./footer.css";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
export const CommonFooter = () => {
  return (
    <>
      <footer className="emarket-footer">
        <div className="container">
          {/* Newsletter */}
          <div className="emarket-footer-newsletter">
            <div className="newsletter-info">
              <h4>Sign Up For Newsletter</h4>
              <p>Subscribe to get updates on promotions and coupons.</p>
            </div>
            <div className="emarket-newsletter">
              <input type="email" placeholder="Your email address..." />
              <button>Subscribe</button>
            </div>
          </div>

          {/* Footer Columns */}
          <div className="emarket-footer-grid">
            {/* About */}
            <div>
              <h5 className="emarket-footer-title">About Us</h5>
              <p className="emarket-footer-text">
                We are a team of designers and developers that create high
                quality ecommerce solutions.
              </p>
              <div className="emarket-social-links">
                <a href="#" className="emarket-social-icon">
                  <Facebook />
                </a>
                <a href="#" className="emarket-social-icon">
                  <Twitter />
                </a>
                <a href="#" className="emarket-social-icon">
                  <Instagram />
                </a>
                <a href="#" className="emarket-social-icon">
                  <Youtube />
                </a>
              </div>
            </div>

            {/* Information */}
            <div>
              <h5 className="emarket-footer-title">Information</h5>
              <ul>
                <li>
                  <a href="#" className="emarket-footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Delivery Information
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h5 className="emarket-footer-title">Customer Service</h5>
              <ul>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Site Map
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Gift Certificates
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Affiliate
                  </a>
                </li>
              </ul>
            </div>

            {/* Extras */}
            <div>
              <h5 className="emarket-footer-title">Extras</h5>
              <ul>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Gift Certificates
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Affiliate
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Specials
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    My Account
                  </a>
                </li>
              </ul>
            </div>

            {/* My Account */}
            <div>
              <h5 className="emarket-footer-title">My Account</h5>
              <ul>
                <li>
                  <a href="#" className="emarket-footer-link">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Order History
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Wish List
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="emarket-footer-link">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="emarket-footer-copyright">
            <p>© 2025 eMarket. All Rights Reserved. Designed by MagenTech</p>
          </div>
        </div>
      </footer>
    </>
  );
};
