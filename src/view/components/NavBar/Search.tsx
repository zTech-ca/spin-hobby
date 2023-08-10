import React, { useState, ChangeEvent, FormEvent } from "react";
import { FcSearch } from "react-icons/fc";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { forEachChild } from "typescript";

interface Props {
  onNav?: boolean;
}

enum Category {
  Volvo = "volvo",
  Saab = "saab",
  Mercedes = "mercedes",
  Audi = "audi",
  Toyota = "toyota",
}

export default function Search({ onNav = true }: Props) {
  const [search, setSearch] = useState<string>("");
  const [openCategoryList, setOpenCategoryList] = useState<boolean>(false);
  const [category, setCategory] = useState<Category>(Category.Volvo);

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleOpenCategoryList() {
    setOpenCategoryList(!openCategoryList);
  }

  function handleOnSelectCategory(category: Category){
    setCategory(category);
  }
  
  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Add search handlings here
  }

  return (
    <div className={`navbar-search${onNav ? "" : " navbar-search-mobile"}`}>
      <div
        className="navbar-search-category-toggler"
        onClick={handleOpenCategoryList}
      >
        <div className="navbar-search-selected-category">{category}</div>
        {openCategoryList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        {openCategoryList && (
          <div className="dropdown-menu" style={{position: "absolute", zIndex: 100 }}> 
            <Dropdown category={category} setCategory={setCategory}  handleOnSelectCategory= {handleOnSelectCategory}/>
          </div>
        )}
      </div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchInput}
        />
      </form>
      <div className="navbar-search-magnifier" >
        <FcSearch size={"1.5em"} />
      </div>
    </div>
  );
}

interface DropdownProps{
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
  handleOnSelectCategory: React.Dispatch<React.SetStateAction<Category>>;
}

function Dropdown({
  category,
  setCategory,
  handleOnSelectCategory,
}: DropdownProps) {
  return (
      <div className="dropdown">
        <ul className="categories" id="categories" >
          {Object.values(Category).map((category, i) => (
            <li key={i} value={category} onClick={()=>handleOnSelectCategory(category)}>
              {category}
            </li>
          ))}
          </ul>      
      </div>
  );
}
