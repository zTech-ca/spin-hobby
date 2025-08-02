import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Spin Hobby. All rights reserved.
        </p>
        <div className="footer-links">
          <span>Your trusted anime collectibles destination</span>
          <div className="footer-nav">
            <a href="/contact">Contact Us</a>
            <a href="/support">Support</a>
          </div>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/spinhobby"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              📷 Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
