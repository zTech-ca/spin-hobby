import React, { FormEvent, useState } from "react";
import { Submit } from "../Buttons";
import classNames from "classnames";
import PhoneInput from "react-phone-number-input";

const EMAIL = "email";
const PHONE = "phone";

export default function ForgotPassword() {
  const [tab, setTab] = useState<typeof EMAIL | typeof PHONE>(EMAIL);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const emailTabClass = classNames({
    "modal-login-email-phone-option-active": tab === EMAIL,
  });
  const phoneTabClass = classNames({
    "modal-login-email-phone-option-active": tab === PHONE,
  });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Add the submit handlers here
  }

  function validationFormContent() {
    switch (tab) {
      case EMAIL:
        return (
          <>
            <div className="modal-login-input-section">
              <label>Reset password with Email</label>
              <input
                name={EMAIL}
                placeholder="Enter your email here"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Submit
              className="modal-login-submit"
              text="Get temprary password"
            />
          </>
        );
      case PHONE:
        return (
          <>
            <div className="modal-login-input-section">
              <label>Reset password with Phone</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={phone}
                onChange={(input) => setPhone(input)}
                defaultCountry="CA"
              />
            </div>
            <Submit
              className="modal-login-submit"
              text="Send validation code"
            />
          </>
        );
      default:
        return null;
    }
  }

  return (
    <div className="modal-login">
      <h2>Retrieve your Password</h2>
      <div className="modal-login-email-phone-option-tab">
        <button className={emailTabClass} onClick={() => setTab(EMAIL)}>
          Email
        </button>
        <button className={phoneTabClass} onClick={() => setTab(PHONE)}>
          Phone
        </button>
      </div>
      <form onSubmit={onSubmit}>{validationFormContent()}</form>
    </div>
  );
}
