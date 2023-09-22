import React from "react";
import Search from "./Search";
import Commands from "./Commands";
import Tabs from "./Tabs";

export default function NavBar() {
  return (
    <>
      <div className="header">
        <div className="navbar">
            <div className="table-cell-center navbar-title-container">
              <div className="navbar-title">
                <img src="logo\SPIN-HOBBY-LOGO_アートボード 1 のコピー.png" alt="logo"/>
              </div>
            </div>
            <div className="table-cell-center">
              <Search />
            </div>
            <div className="table-cell-center">
              <Commands />
            </div>
        </div>
        <div className="pages">
          <a href='/'>
            <div className="pages-text">
              Categories
            </div>
          </a>
          <a href='/'>
            <div className="pages-text">
              Event Info
            </div>
          </a>
          <a href='/'>
            <div className="pages-text">
              About Us
            </div>
          </a>
        </div>
        <hr className="horizontal-line"></hr>
        <div className="tabs">
          <Tabs />
        </div>
      </div>
      <Search onNav={false} />
    </>
  );
}
