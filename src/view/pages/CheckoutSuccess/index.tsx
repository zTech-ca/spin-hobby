import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../reducers";

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [orderInfo, setOrderInfo] = useState<any>(null);

  useEffect(() => {
    // Clear the cart after successful payment
    dispatch(clearCart());

    // Get order information from URL parameters
    const orderId = searchParams.get("orderId");
    const paymentId = searchParams.get("paymentId");
    const amount = searchParams.get("amount");

    if (orderId || paymentId) {
      setOrderInfo({
        orderId,
        paymentId,
        amount,
      });
    }
  }, [searchParams, dispatch]);

  return (
    <div className="checkout-success">
      <div className="success-container">
        <div className="success-icon">✅</div>

        <h1>Payment Successful!</h1>
        <p className="success-message">
          Thank you for your order! Your payment has been processed
          successfully.
        </p>

        {orderInfo && (
          <div className="order-details">
            <h3>Order Details</h3>
            {orderInfo.orderId && (
              <p>
                <strong>Order ID:</strong> {orderInfo.orderId}
              </p>
            )}
            {orderInfo.paymentId && (
              <p>
                <strong>Payment ID:</strong> {orderInfo.paymentId}
              </p>
            )}
            {orderInfo.amount && (
              <p>
                <strong>Amount:</strong> ${orderInfo.amount}
              </p>
            )}
          </div>
        )}

        <div className="next-steps">
          <h3>What's Next?</h3>
          <ul>
            <li>📧 You'll receive an email confirmation shortly</li>
            <li>📦 Your order will be processed within 1-2 business days</li>
            <li>🚚 You'll receive tracking information once shipped</li>
          </ul>
        </div>

        <div className="action-buttons">
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
          <Link to="/orders" className="btn btn-secondary">
            View Orders
          </Link>
        </div>

        <div className="support-info">
          <p>
            Questions about your order? Contact us at{" "}
            <a href="mailto:info@spinhobby.com">info@spinhobby.com</a> or call
            (877) 555-5555
          </p>
        </div>
      </div>
    </div>
  );
}
