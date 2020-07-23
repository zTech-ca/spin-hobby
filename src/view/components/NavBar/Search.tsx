import React from "react";
import { FcSearch } from "react-icons/fc";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Search() {
  return (
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
  );
}
