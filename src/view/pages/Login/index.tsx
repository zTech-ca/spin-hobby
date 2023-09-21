import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginBeta, logoutBeta } from "reducers";
import { useBetaSelector } from "selectors";
import { ILogin } from "ts";

const USERNAME = "username";
const PASSWORD = "password";

export default function Login() {
  const dispatch = useDispatch();
  const beta = useBetaSelector();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputs, setInputs] = useState<ILogin>({
    username: "",
    password: "",
  });
  if (beta)
    return (
      <>
        <h4>You are now logged in as beta user!</h4>
        <button onClick={() => dispatch(logoutBeta())}>Logout</button>
        {/* <Link></Link> */}
        <h5>The following pages are available for beta users</h5>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/">spinhobby.com</Link>
          <Link to="/cart">spinhobby.com/cart</Link>
          <Link to="/checkout">spinhobby.com/checkout</Link>
          <Link to="/search">spinhobby.com/search</Link>
          <Link to="/product">spinhobby.com/product</Link>
        </div>
      </>
    );
  else
    return (
      <>
        <h4>Login as beta user</h4>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(loginBeta(inputs));
          }}
          style={{ display: "flex", flexDirection: "column", maxWidth: 500 }}
        >
          <label>Username</label>
          <input
            name={USERNAME}
            type="text"
            value={inputs.username}
            onChange={(e) =>
              setInputs(({ password }) => ({
                username: e.target.value,
                password,
              }))
            }
            placeholder="Username"
          />
          <label>Password</label>
          <input
            name={PASSWORD}
            type={showPassword ? "text" : "password"}
            value={inputs.password}
            onChange={(e) =>
              setInputs(({ username }) => ({
                username,
                password: e.target.value,
              }))
            }
            placeholder="password"
          />
          <span>
            <input
              type="checkbox"
              placeholder=" fda"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            Show password
          </span>
          <input type="submit" value="login" />
        </form>
      </>
    );
}
