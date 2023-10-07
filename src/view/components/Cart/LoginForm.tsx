import React, { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "reducers";

const USERNAME = "username";
const PASSWORD = "password";

interface ILoginInputs {
  username: string;
  password: string;
}

function LoginForm() {
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
        dispatch(login(inputs));
      }
    
    return(
      <form onSubmit={onSubmit} className="login-form">
        <div className="login-form-username">
          <input
            name={USERNAME}
            type="text"
            value={inputs.username}
            onChange={onInputChange}
            placeholder="Username"
            className="login-input"
          />
        </div>
        <div className="login-form-password">
          <input
            name={PASSWORD}
            type="password"
            value={inputs.password}
            onChange={onInputChange}
            placeholder="Password"
            className="login-input"
          />
        </div>
        <button type="submit" className="login-form-checkout-button">Checkout</button>
      </form>
    )
}

export default LoginForm