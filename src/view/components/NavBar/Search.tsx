import React, { useState, ChangeEvent, FormEvent } from "react";
import { FcSearch } from "react-icons/fc";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface Props {
  onNav?: boolean;
}

export default function Search({ onNav = true }: Props) {
  const [search, setSearch] = useState<string>("");
  const [openCategoryList, setOpenCategoryList] = useState<boolean>(false);

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleOpenCategoryList() {
    setOpenCategoryList(!openCategoryList);
  }

  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Add search handlings here
  }

  const [category, setCategory] = useState<Category>(Category.All);

  function onSelect(e: ChangeEvent<HTMLSelectElement>) {
    console.log("you have selected: ", e.target.value);

    setCategory(e.target.value as Category);
  }

  return (
    <div className={`navbar-search${onNav ? "" : " navbar-search-mobile"}`}>
      <div
        className="navbar-search-category-toggler"
        onClick={handleOpenCategoryList}
      >
        <div className="dropdown-menu">
          <div className="navbar-search-selected-category">{category}</div>
          {openCategoryList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
      </div>
      <div>
        <Dropdown 
          category={category} 
          setCategory={setCategory} 
          onSelect={onSelect} 
        />
      </div>
      <form onSubmit={onSubmitHandler}>
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

enum Category {
  All = "all",
  Category1 = "category1",
  Category2 = "category2",
  Category3 = "category3",
  Category4 = "category4",
}

function Dropdown({
  category: category,
  setCategory: setCategory,
  onSelect,
}: {
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
  onSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select name="cars" id="cars" value={category} onChange={onSelect}>
      {Object.values(Category).map((category, i) => (
        <option key={i} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}