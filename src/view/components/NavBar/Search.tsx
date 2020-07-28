import React, { useState, ChangeEvent } from "react";
import { FcSearch } from "react-icons/fc";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const [openCategoryList, setOpenCategoryList] = useState<boolean>(false);

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleOpenCategoryList() {
    setOpenCategoryList(!openCategoryList);
  }

  return (
    <div className="navbar-search">
      <div
        className="navbar-search-category-toggler"
        onClick={handleOpenCategoryList}
      >
        <div className="navbar-search-selected-category">All</div>
        {openCategoryList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
      </div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchInput}
        />
      </form>
      <div className="navbar-search-magnifier">
        <FcSearch size={"1.5em"} />
      </div>
    </div>
  );
}
