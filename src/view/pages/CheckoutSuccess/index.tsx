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

      <style jsx>{`
        .checkout-success {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .success-container {
          background: white;
          border-radius: 12px;
          padding: 40px;
          max-width: 600px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .success-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        h1 {
          color: #28a745;
          margin-bottom: 10px;
          font-size: 2.5rem;
        }

        .success-message {
          color: #666;
          font-size: 1.2rem;
          margin-bottom: 30px;
        }

        .order-details {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 30px;
          text-align: left;

          h3 {
            margin: 0 0 15px 0;
            color: #333;
          }

          p {
            margin: 8px 0;
            color: #555;
          }
        }

        .next-steps {
          text-align: left;
          margin-bottom: 30px;

          h3 {
            color: #333;
            margin-bottom: 15px;
          }

          ul {
            list-style: none;
            padding: 0;

            li {
              padding: 8px 0;
              color: #555;
              font-size: 1rem;
            }
          }
        }

        .action-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-bottom: 30px;

          .btn {
            padding: 12px 30px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
          }

          .btn-primary {
            background: #52ad9c;
            color: white;

            &:hover {
              background: #428a7d;
            }
          }

          .btn-secondary {
            background: white;
            color: #52ad9c;
            border: 2px solid #52ad9c;

            &:hover {
              background: #52ad9c;
              color: white;
            }
          }
        }

        .support-info {
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;

          p {
            color: #666;
            font-size: 14px;
            margin: 0;
          }

          a {
            color: #52ad9c;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        @media (max-width: 768px) {
          .success-container {
            padding: 30px 20px;
          }

          h1 {
            font-size: 2rem;
          }

          .action-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
