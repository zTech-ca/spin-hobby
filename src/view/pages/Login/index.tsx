import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutBeta, requestLoginBeta } from "../../../reducers";
import { useAwaitLoginSelector, useBetaSelector } from "../../../selectors";
import { ILogin } from "../../../ts";

const USERNAME = "username";
const PASSWORD = "password";

export default function Login() {
  const dispatch = useDispatch();
  const beta = useBetaSelector();
  const loggingIn = useAwaitLoginSelector();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [inputs, setInputs] = useState<ILogin>({
    username: "",
    password: "",
  });
  const [hasAttempted, setHasAttempted] = useState<boolean>(false);
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
        {loggingIn ? (
          <p style={{ color: "red" }}>Logging in...</p>
        ) : (
          hasAttempted && (
            <p style={{ color: "red" }}>Incorrect username and/or password</p>
          )
        )}
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(requestLoginBeta(inputs));
            setHasAttempted(true);
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
