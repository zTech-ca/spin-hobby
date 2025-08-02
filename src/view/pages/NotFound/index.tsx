import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="error-icon">🔍</div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist. It might have been
          moved, deleted, or you entered the wrong URL.
        </p>

        <div className="error-actions">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            Go Back
          </button>
        </div>

        <div className="helpful-links">
          <h3>Popular Pages</h3>
          <div className="links-grid">
            <Link to="/" className="helpful-link">
              🏠 Home
            </Link>
            <Link to="/search" className="helpful-link">
              🔍 Search
            </Link>
            <Link to="/product" className="helpful-link">
              📦 Products
            </Link>
            <Link to="/cart" className="helpful-link">
              🛒 Cart
            </Link>
          </div>
        </div>

        <div className="contact-support">
          <p>
            Still can't find what you're looking for?{" "}
            <Link to="/contact">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
