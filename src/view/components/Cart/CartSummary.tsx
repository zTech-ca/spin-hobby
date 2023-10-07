import React, { useState } from 'react';
import './cart.scss';
import Login from '../Modal/Login';
import LoginForm from './LoginForm';

const CartSummary = ({ items, discounts, total }) => {
  const [checkoutText, setCheckoutText] = useState('Log in for Quick Checkout');
  const [isQuickCheckout, setQuickCheckout] = useState(true);

  function handleQuickCheckout() {
    setCheckoutText("Log in for Quick Checkout.");
    setQuickCheckout(true);
  }

  function handleGuestCheckout() {
    setCheckoutText("Checkout without logging in. You can register during the checkout process.");
    setQuickCheckout(false);
  }

  return (
    <div className="checkout-details">
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="item-details">
          <div className="left-column">
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div className="right-column">
            <ul>
              {items.map((item, index) => (
                <li key={index}>${item.price}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="item-details">
          <div className="left-column">
              <ul>
                {discounts.map((discount, index) => (
                  <li key={index}>{discount.discountId}</li>
                ))}
              </ul>
            </div>
            <div className="right-column">
              <ul>
                {discounts.map((discount, index) => (
                  <li key={index}>-${discount.value}</li>
                ))}
              </ul>
            </div>
          </div>
        <hr className="horizontal-line"></hr>
        <div className="item-details total-row">
          <div className="left-column">Total</div>
          <div className="right-column">${total}</div>
        </div>
      </div>
      <div className="cart-checkout-container">
        <h2>Checkout</h2>
        <div className="checkout-option-buttons">
          <button onClick={handleQuickCheckout}>Quick Checkout</button>
          <button onClick={handleGuestCheckout}>Guest Checkout</button>
        </div>
        <div className="checkout-text checkout-login">
          <p>{checkoutText}</p>
          {isQuickCheckout && <LoginForm />}
        </div>
        <div className="checkout-button">
          {!isQuickCheckout && <button>Checkout</button>}
        </div>
      </div>
    </div>
  );
};

export default CartSummary;