import React from "react";
import Search from "./Search";
import Commands from "./Commands";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="table-cell-center navbar-title-container">
        <div className="navbar-title">
          <img src="/assets/tumblr_o7z1hvG2c11vvvxguo1_400.jpg" alt="logo" />
          <h1>SPIN HOBBY</h1>
        </div>
      </div>
      <div className="table-cell-center">
        <Search />
      </div>
      <div className="table-cell-center">
        <Commands />
      </div>
    </div>
  );
}
