import React from "react";
import { StandardOptionalIcon } from "../components/Buttons";
import { BiEnvelope } from "react-icons/bi";
import { Separator } from "view/components/Separator";

export default function Login() {
  return (
    <div className="modal-login">
      <div id="modal-login-header">Welcome Back</div>
      <form id="modal-login-form">
        <div className="modal-input-field">
          <label>E-mail address</label>
          <input title="email" name="email" type="email" />
        </div>
        <div className="modal-input-field">
          <label>Password</label>
          <input title="password" name="password" type="password" />
        </div>
        <StandardOptionalIcon
          classNames="modal-login-button-general"
          icon={BiEnvelope}
          text="Log in"
        />
      </form>
      <div id="modal-login-forget-password">Forget Password?</div>
      <Separator classNames="modal-login-separator-1" text="OR" />
      <Separator
        classNames="modal-login-separator-1"
        text="Don't have an account ?"
      />
      <StandardOptionalIcon text="Register" />
    </div>
  );
}
