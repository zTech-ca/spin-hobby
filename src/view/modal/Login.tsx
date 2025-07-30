import React, { useState } from "react";
import { BiEnvelope, BiLock, BiUser } from "react-icons/bi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

interface LoginInputs {
  email: string;
  password: string;
}

export default function Login() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const [inputs, setInputs] = useState<LoginInputs>({
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Add actual authentication logic here
      console.log("Authentication attempt:", inputs);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, show error
      setError("Invalid email or password. Please try again.");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleGoogleLogin() {
    console.log("Google login attempted");
    // Add Google OAuth logic here
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

      <button
        type="button"
        className="auth-modal-google"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="auth-modal-google-icon" />
        Continue with Google
      </button>

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
