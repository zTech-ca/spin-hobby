import React, { FormEvent, useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Submit } from "../Buttons";
import { EModal } from "../../../ts";
import { openModal } from "../../../reducers";

const USERNAME = "username";
const PASSWORD = "password";

interface ILoginInputs {
  username: string;
  password: string;
}

export default function Login() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState<ILoginInputs>({
    username: "",
    password: "",
  });

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case USERNAME:
        setInputs({ ...inputs, username: e.target.value });
        return;
      case PASSWORD:
        setInputs({ ...inputs, password: e.target.value });
        return;
      default:
        return;
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Add the submit handlers here
  }

  function handleSignUp() {
    dispatch(openModal(EModal.SIGNUP));
  }

  function handleForgotPassword() {
    dispatch(openModal(EModal.FORGOT_PASSWORD));
  }

  return (
    <div className="modal-login">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="modal-login-input-section">
          <label>Username</label>
          <input
            name={USERNAME}
            type="text"
            value={inputs.username}
            onChange={onInputChange}
          />
        </div>
        <div className="modal-login-input-section">
          <label>Password</label>
          <input
            name={PASSWORD}
            type="password"
            value={inputs.password}
            onChange={onInputChange}
          />
        </div>
        <Submit className="modal-login-submit" text="Login" />
      </form>
      <button
        className="modal-login-forgot-your-password"
        onClick={handleForgotPassword}
      >
        Forgot your password?
      </button>
      <button className="modal-login-sign-up" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
}
