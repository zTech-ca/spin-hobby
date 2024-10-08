import React, { FormEvent, useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Submit } from "../components/Buttons";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { EModal } from "../../ts";
import { openModal } from "../../reducers";

const USERNAME = "username";
const EMAIL = "email";
const PASSWORD = "password";
const PASSWORD_RETYPE = "retypePassword";

interface ILoginInputs {
  username: string;
  email: string;
  phone: string;
  password: string;
  retypePassword: string;
}

export default function SignUp() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState<ILoginInputs>({
    username: "",
    email: "",
    phone: "",
    password: "",
    retypePassword: "",
  });

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case USERNAME:
        setInputs({ ...inputs, username: e.target.value });
        return;
      case EMAIL:
        setInputs({ ...inputs, email: e.target.value });
        return;
      case PASSWORD:
        setInputs({ ...inputs, password: e.target.value });
        return;
      case PASSWORD_RETYPE:
        setInputs({ ...inputs, retypePassword: e.target.value });
        return;
      default:
        return;
    }
  }

  function onPhoneChange(phone: string) {
    setInputs({ ...inputs, phone });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Add the submit handlers here

    if (!isValidPhoneNumber(inputs.phone)) {
      // Handler for submitting invalid phone number here
    }
  }

  function handleSignUp() {
    dispatch(openModal(EModal.LOGIN));
  }

  return (
    <div className="modal-login">
      <h2>Sign Up</h2>
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
          <label>E-mail</label>
          <input
            name={EMAIL}
            type="text"
            value={inputs.email}
            onChange={onInputChange}
          />
        </div>
        <div className="modal-login-input-section">
          <label>Phone</label>
          <PhoneInput
            placeholder="Enter phone number"
            value={inputs.phone}
            onChange={onPhoneChange}
            defaultCountry="CA"
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
        <div className="modal-login-input-section">
          <label>Retype password</label>
          <input
            name={PASSWORD_RETYPE}
            type="password"
            value={inputs.retypePassword}
            onChange={onInputChange}
          />
        </div>
        <Submit className="modal-login-submit" text="Sign Up Now" />
      </form>
      <button className="modal-login-sign-up" onClick={handleSignUp}>
        Login
      </button>
    </div>
  );
}
