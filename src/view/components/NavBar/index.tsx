import React from "react";
import { FcSearch } from "react-icons/fc";
import { TiArrowSortedDown } from "react-icons/ti";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-title table-cell-center">
        <img src="/assets/tumblr_o7z1hvG2c11vvvxguo1_400.jpg" alt="logo" />
      </div>
      <div className="table-cell-center">
        <div className="navbar-search">
          <div className="navbar-search-category-toggler">
            <div className="navbar-search-selected-category">All</div>
            <TiArrowSortedDown />
          </div>
          <form>
            <input type="text" placeholder="Search..." />
          </form>
          <div className="navbar-search-magnifier">
            <FcSearch size={"1.5em"} />
          </div>
        </div>
      </div>
    </div>
  );
}
