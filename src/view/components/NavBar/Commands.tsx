import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { TiChevronRightOutline } from "react-icons/ti";

export default function Commands() {
  return (
    <div className="navbar-commands">
      <div className="navbar-command">
        <FaUserAlt className="navbar-command-icon" size={"1.5em"} />
        <label>Login</label>
      </div>
      <div className="navbar-command">
        <RiShoppingCart2Line className="navbar-command-icon" size={"1.5em"} />
        <label>Cart</label>
      </div>
      <div className="navbar-command">
        <TiChevronRightOutline className="navbar-command-icon" size={"1.5em"} />
        <label>Request</label>
      </div>
    </div>
  );
}
