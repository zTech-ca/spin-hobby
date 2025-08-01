import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect,
} from "react";
import { FcSearch } from "react-icons/fc";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { getSearch } from "../../../reducers";

interface Props {
  onNav?: boolean;
}

enum Category {
  All = "All Categories",
  Figures = "Scale Figures",
  Nendoroids = "Nendoroids",
  Plushies = "Plushies",
  Keychains = "Keychains",
  Clothing = "Clothing",
}

export default function Search({ onNav = true }: Props) {
  const [search, setSearch] = useState<string>("");
  const [openCategoryList, setOpenCategoryList] = useState<boolean>(false);
  const [category, setCategory] = useState<Category>(Category.All);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenCategoryList(false);
      }
    }

    if (openCategoryList) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openCategoryList]);

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleOpenCategoryList() {
    setOpenCategoryList(!openCategoryList);
  }

  function handleOnSelectCategory(selectedCategory: Category) {
    setCategory(selectedCategory);
    setOpenCategoryList(false); // Close dropdown after selection
  }

  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(getSearch({ page: 1, searchString: search }));
  }

  return (
    <div className={`navbar-search${onNav ? "" : " navbar-search-mobile"}`}>
      <div
        ref={dropdownRef}
        className="navbar-search-category-toggler"
        onClick={handleOpenCategoryList}
      >
        <div className="navbar-search-selected-category">{category}</div>
        {openCategoryList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        {openCategoryList && (
          <div className="dropdown-menu">
            <Dropdown
              category={category}
              setCategory={setCategory}
              handleOnSelectCategory={handleOnSelectCategory}
            />
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
      <div className="navbar-search-magnifier">
        <FcSearch size={"1.5em"} />
      </div>
    </div>
  );
}

function Dropdown({
  category,
  setCategory,
  handleOnSelectCategory,
}: {
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
  handleOnSelectCategory: (category: Category) => void;
}) {
  return (
    <div className="dropdown">
      <ul className="categories" id="categories">
        {Object.values(Category).map((categoryOption, i) => (
          <li key={i} onClick={() => handleOnSelectCategory(categoryOption)}>
            {categoryOption}
          </li>
        ))}
      </ul>
    </div>
  );
}
