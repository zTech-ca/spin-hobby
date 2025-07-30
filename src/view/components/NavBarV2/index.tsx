import React from "react";
import Search from "./Search";
import Commands from "./Commands";
import Tabs from "./Tabs";

export default function NavBar() {
  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="navbar-title-container">
            <div className="navbar-title">
              <img
                src="logo/SPIN-HOBBY-LOGO_アートボード 1 のコピー.png"
                alt="Spin Hobby Logo"
              />
              <h1>Spin Hobby</h1>
            </div>
          </div>
          <div className="navbar-search">
            <Search />
          </div>
          <div className="navbar-commands">
            <Commands />
          </div>
        </div>
        <div className="pages">
          <a href="/">
            <div className="pages-text">Categories</div>
          </a>
          <a href="/">
            <div className="pages-text">Event Info</div>
          </a>
          <a href="/">
            <div className="pages-text">About Us</div>
          </a>
          <a href="/">
            <div className="pages-text">Support</div>
          </a>
        </div>
        <div className="tabs">
          <Tabs />
        </div>
      </div>
      <Search onNav={false} />
    </>
  );
}
