import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Get in touch with the Spin Hobby team! We're here to help with your
            anime collectibles journey.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Email</h3>
                <p>info@spinhobby.com</p>
                <p>For general inquiries, orders, and support</p>
              </div>

              <div className="contact-method">
                <h3>📱 Phone</h3>
                <p>+1 (555) 123-4567</p>
                <p>Monday - Friday: 9 AM - 6 PM EST</p>
              </div>

              <div className="contact-method">
                <h3>🏪 Store Hours</h3>
                <p>Monday - Saturday: 10 AM - 8 PM</p>
                <p>Sunday: 12 PM - 6 PM EST</p>
              </div>

              <div className="contact-method">
                <h3>📍 Location</h3>
                <p>123 Anime Street</p>
                <p>Tokyo District, CA 90210</p>
              </div>

              <div className="contact-method">
                <h3>📷 Follow Us</h3>
                <p>
                  <a
                    href="https://www.instagram.com/spinhobby"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @spinhobby
                  </a>
                </p>
                <p>Stay updated with our latest arrivals</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a topic</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="shipping">Shipping & Returns</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
