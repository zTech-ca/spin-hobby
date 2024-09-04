import React, { useState } from "react";
import { StandardOptionalIcon } from "../components/Buttons";
import { BiEnvelope } from "react-icons/bi";
import { Separator } from "view/components/Separator";
import { InnerLabelInput } from "view/components/Inputs";

interface LoginInputs {
  email: string;
  password: string;
}

export default function Login() {
  const [error, setError] = useState<boolean>(false);

  const [inputs, setInputs] = useState<LoginInputs>({
    email: "",
    password: "",
  });

  function onSubmit() {
    console.log("handle submit here");
    setError(true);
  }

  return (
    <div className="modal-login">
      <div id="modal-login-header">Welcome Back</div>
      <form
        id="modal-login-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <InnerLabelInput
          classNames="modal-input-field"
          label="E-mail address"
          value={inputs.email}
          onChange={(newVal) =>
            setInputs((oldInputs) => ({ ...oldInputs, email: newVal }))
          }
          error={error}
        />
        <InnerLabelInput
          classNames="modal-input-field"
          label="Password"
          value={inputs.password}
          onChange={(newVal) =>
            setInputs((oldInputs) => ({ ...oldInputs, password: newVal }))
          }
          type="password"
          error={error}
        />
        {error && (
          <div className="modal-login-incorrect-msg">
            <span>Incorrect email or password</span>
          </div>
        )}
        <StandardOptionalIcon
          classNames="modal-login-button-general"
          icon={BiEnvelope}
          text="Log in"
          onClick={onSubmit}
        />
        <input style={{ display: "none" }} type="submit" />
      </form>
      <div id="modal-login-forget-password">Forgot Password?</div>
      <Separator classNames="modal-login-separator-1" text="OR" />
      <Separator
        classNames="modal-login-separator-1"
        text="Don't have an account ?"
      />
      <StandardOptionalIcon text="Register" />
    </div>
  );
}
