import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3>Spin Hobby</h3>
            <p>
              Your ultimate destination for anime figures, collectibles, and
              merchandise.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                📱
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="Facebook">
                👥
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Shop</h4>
            <div className="footer-links">
              <Link to="/product?featured=true">Featured Items</Link>
              <Link to="/product?new=true">New Arrivals</Link>
              <Link to="/product?preorder=true">Pre-orders</Link>
              <Link to="/product">All Products</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Customer Service</h4>
            <div className="footer-links">
              <Link to="/contact">Contact Us</Link>
              <Link to="/support">Support</Link>
              <Link to="/shipping">Shipping Info</Link>
              <Link to="/returns">Returns</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Account</h4>
            <div className="footer-links">
              <Link to="/login">Login</Link>
              <Link to="/account">My Account</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/orders">Order History</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/careers">Careers</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Spin Hobby. All rights reserved.</p>
            <div className="payment-methods">
              <span>💳 Secure payments powered by Square</span>
            </div>
            <p className="powered-by">
              Powered by{" "}
              <a
                href="https://ztech.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                zTech.ca
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
