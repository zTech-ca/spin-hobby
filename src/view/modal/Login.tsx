import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BiEnvelope, BiLock, BiUser } from "react-icons/bi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { hideModal } from "../../reducers/modalReducer";
import { queueLogin, clearQueueLogin } from "../../reducers/userReducer";
import SquareAuthService from "../../api/squareAuth";
import { loginUser } from "../../api";

// Square icon component
const SquareIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#1E88E5" />
    <path d="M8 8h8v8H8V8z" fill="white" />
    <path d="M10 10h4v4h-4v-4z" fill="#1E88E5" />
  </svg>
);

interface LoginInputs {
  email: string;
  password: string;
}

export default function Login() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSquareLoading, setIsSquareLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState<LoginInputs>({
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    dispatch(queueLogin());

    try {
      if (isSignUp) {
        // Handle signup logic here
        console.log("Signup attempt:", inputs);
        setError(
          "Signup functionality not implemented yet. Please use Square login for now."
        );
      } else {
        // Handle login
        const result = await loginUser({
          email: inputs.email,
          password: inputs.password,
        });

        if (result.success) {
          dispatch(hideModal());
          dispatch(clearQueueLogin());
        } else {
          setError(
            result.message || "Invalid email or password. Please try again."
          );
        }
      }
    } catch (err: any) {
      console.error("Authentication error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
      dispatch(clearQueueLogin());
    }
  }

  function handleGoogleLogin() {
    console.log("Google login attempted");
    setError("Google login not implemented yet. Please use Square login.");
  }

  async function handleSquareLogin() {
    setIsSquareLoading(true);
    setError("");
    dispatch(queueLogin());

    try {
      await SquareAuthService.initiateSquareLogin();
      // User will be redirected to Square OAuth, callback will handle the rest
    } catch (err: any) {
      console.error("Square login error:", err);
      setError(
        err.message || "Failed to initiate Square login. Please try again."
      );
      setIsSquareLoading(false);
      dispatch(clearQueueLogin());
    }
  }

  function toggleMode() {
    setIsSignUp(!isSignUp);
    setError("");
    setInputs({ email: "", password: "" });
  }

  return (
    <div className="auth-modal">
      <div className="auth-modal-header">
        <div className="auth-modal-logo">
          <BiUser className="auth-modal-logo-icon" />
        </div>
        <h2 className="auth-modal-title">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="auth-modal-subtitle">
          {isSignUp
            ? "Join Spin Hobby to discover amazing anime merchandise"
            : "Sign in to your account to continue shopping"}
        </p>
      </div>

      <form className="auth-modal-form" onSubmit={handleSubmit}>
        <div className="auth-modal-input-group">
          <label className="auth-modal-label">Email Address</label>
          <div className="auth-modal-input-wrapper">
            <BiEnvelope className="auth-modal-input-icon" />
            <input
              type="email"
              className="auth-modal-input"
              placeholder="Enter your email"
              value={inputs.email}
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
          </div>
        </div>

        <div className="auth-modal-input-group">
          <label className="auth-modal-label">Password</label>
          <div className="auth-modal-input-wrapper">
            <BiLock className="auth-modal-input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              className="auth-modal-input"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
            <button
              type="button"
              className="auth-modal-input-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {error && (
          <div className="auth-modal-error">
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          className="auth-modal-submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="auth-modal-loading">
              <div className="auth-modal-spinner" />
              Processing...
            </div>
          ) : isSignUp ? (
            "Create Account"
          ) : (
            "Sign In"
          )}
        </button>

        {!isSignUp && (
          <button
            type="button"
            className="auth-modal-forgot"
            onClick={() => console.log("Forgot password")}
          >
            Forgot your password?
          </button>
        )}
      </form>

      <div className="auth-modal-divider">
        <span>or continue with</span>
      </div>

      <div className="auth-modal-oauth-buttons">
        <button
          type="button"
          className="auth-modal-google"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="auth-modal-google-icon" />
          Continue with Google
        </button>

        <button
          type="button"
          className="auth-modal-square"
          onClick={handleSquareLogin}
          disabled={isSquareLoading}
        >
          {isSquareLoading ? (
            <div className="auth-modal-loading">
              <div className="auth-modal-spinner" />
              Connecting...
            </div>
          ) : (
            <>
              <SquareIcon />
              Continue with Square
            </>
          )}
        </button>
      </div>

      <div className="auth-modal-switch">
        <span>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
        </span>
        <button
          type="button"
          className="auth-modal-switch-btn"
          onClick={toggleMode}
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
