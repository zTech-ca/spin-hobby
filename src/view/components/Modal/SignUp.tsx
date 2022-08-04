import React, { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Submit } from "../Buttons";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { EModal } from "../../../ts";
import { openModal } from "../../../reducers";
// import
import { register } from "../../../reducers";

import { useUserSelector } from "../../../selectors";

import axios from "axios";

const USERNAME = "username";
const FNAME = "First Name";
const LNAME = "Last Name";
const EMAIL = "email";
const PASSWORD = "password";
const PASSWORD_RETYPE = "retypePassword";

interface ILoginInputs {
  username: string;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  password: string;
  retypePassword: string;
}

export default function SignUp() {
  const dispatch = useDispatch();
  const user = useUserSelector();

  const [inputs, setInputs] = useState<ILoginInputs>({
    username: "",
    fname: "",
    lname: "",
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
      case FNAME:
        setInputs({ ...inputs, fname: e.target.value });
        return;
      case LNAME:
        setInputs({ ...inputs, lname: e.target.value });
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

    console.log("phone number: ", inputs, +inputs.phone);

    if (!isValidPhoneNumber(inputs.phone)) {
      // Handler for submitting invalid phone number here
    }

    const { retypePassword, ...registerData } = inputs;

    // dispatch(register({ ...registerData, phone: inputs.phone.slice(1) }));

    // dispatch(
    //   register({
    //     fname: "first",
    //     lname: "lname",
    //     phone: `5646d5495${Math.round(
    //       Math.random() * 100000 + Math.random() * 1000 + Math.random() * 10
    //     )}`,
    //     password: "jjkklll",
    //     email: `3ffdd${Math.round(
    //       Math.random() * 100000 + Math.random() * 1000 + Math.random() * 10
    //     )}@gmail.com`,
    //     username: `abcdedff${Math.round(
    //       Math.random() * 100000 + Math.random() * 1000 + Math.random() * 10
    //     )}`,
    //   })
    // );

    dispatch(
      register({
        fname: "first",
        lname: "lname",
        phone: `123456789`,
        password: "uofa",
        email: `uofa@gmail.com`,
        username: `uofa`,
      })
    );

    // axios.get
  }

  function handleSignUp() {
    dispatch(openModal(EModal.LOGIN));
  }

  useEffect(() => {
    console.log("user state  ==============> ", user);
  }, [user]);

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
          <label>First Name</label>
          <input
            name={FNAME}
            type="text"
            value={inputs.fname}
            onChange={onInputChange}
          />
        </div>
        <div className="modal-login-input-section">
          <label>Last Name</label>
          <input
            name={LNAME}
            type="text"
            value={inputs.lname}
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
