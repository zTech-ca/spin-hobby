import React, { useEffect, useState } from "react";
import axios from "axios";

interface SquareCheckoutProps {
  amount: number;
  currency?: string;
  orderId?: string;
  customerInfo?: {
    email?: string;
    billingAddress?: any;
    shippingAddress?: any;
  };
  onPaymentSuccess: (paymentResult: any) => void;
  onPaymentError: (error: string) => void;
}

declare global {
  interface Window {
    Square: any;
  }
}

export default function SquareCheckout({
  amount,
  currency = "USD",
  orderId,
  customerInfo,
  onPaymentSuccess,
  onPaymentError,
}: SquareCheckoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [squareConfig, setSquareConfig] = useState<any>(null);
  const [payments, setPayments] = useState<any>(null);
  const [card, setCard] = useState<any>(null);

  // Load Square Web Payments SDK
  useEffect(() => {
    loadSquareSDK();
  }, []);

  // Initialize Square Payments when config is loaded
  useEffect(() => {
    if (squareConfig && window.Square) {
      initializeSquarePayments();
    }
  }, [squareConfig]);

  async function loadSquareSDK() {
    try {
      // Get Square configuration from backend
      const response = await axios.get(
        "/api/v1/payments/config/application-id"
      );

      if (response.data.success) {
        setSquareConfig(response.data.data);

        // Load Square SDK
        if (!window.Square) {
          const script = document.createElement("script");
          script.src = "https://sandbox-web.squarecdn.com/v1/square.js"; // Use production URL in production
          script.async = true;
          script.onload = () => {
            console.log("Square SDK loaded successfully");
            setIsLoading(false);
          };
          script.onerror = () => {
            onPaymentError("Failed to load Square payment system");
            setIsLoading(false);
          };
          document.head.appendChild(script);
        } else {
          setIsLoading(false);
        }
      } else {
        onPaymentError("Failed to load payment configuration");
        setIsLoading(false);
      }
    } catch (error: any) {
      onPaymentError("Failed to initialize payment system");
      setIsLoading(false);
    }
  }

  async function initializeSquarePayments() {
    try {
      if (!window.Square) {
        throw new Error("Square SDK not loaded");
      }

      const paymentsInstance = window.Square.payments(
        squareConfig.applicationId,
        squareConfig.locationId
      );

      setPayments(paymentsInstance);

      // Initialize card payment form
      const cardInstance = await paymentsInstance.card();
      await cardInstance.attach("#square-card-container");

      setCard(cardInstance);
    } catch (error: any) {
      console.error("Failed to initialize Square payments:", error);
      onPaymentError("Failed to initialize payment form");
    }
  }

  async function handlePayment() {
    if (!card || !payments) {
      onPaymentError("Payment form not ready");
      return;
    }

    setIsProcessing(true);

    try {
      // Tokenize the payment method
      const tokenResult = await card.tokenize();

      if (tokenResult.status === "OK") {
        // Send payment to backend
        const paymentResponse = await axios.post("/api/v1/payments/create", {
          sourceId: tokenResult.token,
          amount: amount,
          currency: currency,
          orderId: orderId,
          customerInfo: customerInfo,
        });

        if (paymentResponse.data.success) {
          onPaymentSuccess(paymentResponse.data.data);
        } else {
          onPaymentError(paymentResponse.data.error || "Payment failed");
        }
      } else {
        // Handle tokenization errors
        const errorMessage =
          tokenResult.errors?.[0]?.message || "Card validation failed";
        onPaymentError(errorMessage);
      }
    } catch (error: any) {
      console.error("Payment processing error:", error);
      onPaymentError(
        error.response?.data?.error || "Payment processing failed"
      );
    } finally {
      setIsProcessing(false);
    }
  }

  if (isLoading) {
    return (
      <div className="square-checkout-loading">
        <div className="loading-spinner"></div>
        <p>Loading payment form...</p>
      </div>
    );
  }

  return (
    <div className="square-checkout">
      <div className="payment-summary">
        <h3>Payment Summary</h3>
        <div className="amount">
          Total: {currency} ${amount.toFixed(2)}
        </div>
        {orderId && <div className="order-id">Order: {orderId}</div>}
      </div>

      <div className="payment-form">
        <h4>Payment Information</h4>
        <div id="square-card-container">
          {/* Square card form will be injected here */}
        </div>

        <button
          className="pay-button"
          onClick={handlePayment}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <div className="processing">
              <div className="loading-spinner"></div>
              Processing...
            </div>
          ) : (
            `Pay ${currency} $${amount.toFixed(2)}`
          )}
        </button>
      </div>

      <div className="payment-security">
        <p>🔒 Secure payment powered by Square</p>
        <p>Your payment information is encrypted and secure</p>
      </div>

      <style jsx>{`
        .square-checkout {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background: white;
        }

        .payment-summary {
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 6px;
        }

        .payment-summary h3 {
          margin: 0 0 10px 0;
          font-size: 18px;
          color: #333;
        }

        .amount {
          font-size: 20px;
          font-weight: bold;
          color: #2c5aa0;
        }

        .order-id {
          font-size: 14px;
          color: #666;
          margin-top: 5px;
        }

        .payment-form h4 {
          margin: 0 0 15px 0;
          font-size: 16px;
          color: #333;
        }

        #square-card-container {
          margin-bottom: 20px;
          min-height: 100px;
        }

        .pay-button {
          width: 100%;
          padding: 15px;
          background: #2c5aa0;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .pay-button:hover:not(:disabled) {
          background: #1e3a8a;
        }

        .pay-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .processing {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s linear infinite;
        }

        .square-checkout-loading {
          text-align: center;
          padding: 40px;
        }

        .square-checkout-loading .loading-spinner {
          width: 24px;
          height: 24px;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-top-color: #2c5aa0;
          margin: 0 auto 15px;
        }

        .payment-security {
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #e0e0e0;
          text-align: center;
        }

        .payment-security p {
          margin: 5px 0;
          font-size: 12px;
          color: #666;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
