import React from "react";
import "./support.scss";

export default function Support() {
  return (
    <div className="support-page">
      <div className="support-container">
        <div className="support-header">
          <h1>Help & Support</h1>
          <p>
            Find answers to common questions and get help with your Spin Hobby
            experience.
          </p>
        </div>

        <div className="support-content">
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>🚚 Shipping & Delivery</h3>
                <div className="faq-content">
                  <p>
                    <strong>Q: How long does shipping take?</strong>
                  </p>
                  <p>
                    Standard shipping takes 3-7 business days. Express shipping
                    is available for 1-2 business days.
                  </p>

                  <p>
                    <strong>Q: Do you ship internationally?</strong>
                  </p>
                  <p>
                    Yes! We ship worldwide. International shipping typically
                    takes 7-14 business days.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <h3>📦 Orders & Returns</h3>
                <div className="faq-content">
                  <p>
                    <strong>Q: Can I cancel my order?</strong>
                  </p>
                  <p>
                    Orders can be cancelled within 1 hour of placing them. After
                    that, please contact our support team.
                  </p>

                  <p>
                    <strong>Q: What's your return policy?</strong>
                  </p>
                  <p>
                    We accept returns within 30 days of delivery for unused
                    items in original packaging.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <h3>💰 Payment & Pricing</h3>
                <div className="faq-content">
                  <p>
                    <strong>Q: What payment methods do you accept?</strong>
                  </p>
                  <p>
                    We accept all major credit cards, PayPal, and digital
                    payments through Square.
                  </p>

                  <p>
                    <strong>Q: Do you offer price matching?</strong>
                  </p>
                  <p>
                    Yes! We match prices from authorized retailers. Contact us
                    with proof of the lower price.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <h3>🏪 Products & Availability</h3>
                <div className="faq-content">
                  <p>
                    <strong>Q: Are your figures authentic?</strong>
                  </p>
                  <p>
                    Absolutely! We only sell authentic figures from official
                    manufacturers like Good Smile Company, Kotobukiya, and more.
                  </p>

                  <p>
                    <strong>Q: When will pre-orders arrive?</strong>
                  </p>
                  <p>
                    Pre-order dates are estimates from manufacturers. We'll
                    notify you of any delays immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="support-sidebar">
            <div className="quick-help">
              <h3>Quick Help</h3>
              <div className="help-links">
                <a href="/contact" className="help-link">
                  <span className="help-icon">📧</span>
                  <div>
                    <strong>Contact Us</strong>
                    <p>Get personalized help</p>
                  </div>
                </a>

                <a href="/account" className="help-link">
                  <span className="help-icon">👤</span>
                  <div>
                    <strong>My Account</strong>
                    <p>Track orders & manage info</p>
                  </div>
                </a>

                <a href="/cart" className="help-link">
                  <span className="help-icon">🛒</span>
                  <div>
                    <strong>Shopping Cart</strong>
                    <p>Review your items</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="support-hours">
              <h3>Support Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Monday - Friday</span>
                  <span>9 AM - 6 PM EST</span>
                </div>
                <div className="hours-item">
                  <span>Saturday</span>
                  <span>10 AM - 4 PM EST</span>
                </div>
                <div className="hours-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
