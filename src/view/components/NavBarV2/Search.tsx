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
import { useNavigate } from "react-router-dom";
import { getSearch } from "../../../reducers";

interface Props {
  onNav?: boolean;
}

interface SearchCategory {
  id: string;
  name: string;
}

const DEFAULT_CATEGORIES = [
  { id: "all", name: "All Categories" },
  { id: "figures", name: "Scale Figures" },
  { id: "nendoroids", name: "Nendoroids" },
  { id: "plushies", name: "Plushies" },
  { id: "apparel", name: "Anime Apparel" },
];

export default function Search({ onNav = true }: Props) {
  const [search, setSearch] = useState<string>("");
  const [openCategoryList, setOpenCategoryList] = useState<boolean>(false);
  const [category, setCategory] = useState<SearchCategory>(
    DEFAULT_CATEGORIES[0]
  );
  const [categories, setCategories] =
    useState<SearchCategory[]>(DEFAULT_CATEGORIES);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:8001/api/v1/categories?featured=true&parent_only=true"
        );
        const data = await response.json();
        if (data.success && data.data.length > 0) {
          const apiCategories = [
            DEFAULT_CATEGORIES[0], // Keep "All Categories" first
            ...data.data.map((cat: any) => ({
              id: cat.id,
              name: cat.name,
            })),
          ];
          setCategories(apiCategories);
        }
      } catch (error) {
        console.error("Error fetching categories for search:", error);
        // Keep default categories on error
      }
    };

    fetchCategories();
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenCategoryList(false);
      }

      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }

    if (openCategoryList || showSuggestions) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openCategoryList, showSuggestions]);

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);

    // Fetch suggestions after user stops typing for 300ms
    if (value.trim().length >= 2) {
      const timeoutId = setTimeout(() => {
        fetchSuggestions(value.trim());
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }

  async function fetchSuggestions(query: string) {
    try {
      const response = await fetch(
        `http://localhost:8001/api/v1/search/suggestions?q=${encodeURIComponent(
          query
        )}&limit=5`
      );
      const data = await response.json();

      if (data.success) {
        setSuggestions(data.suggestions);
        setShowSuggestions(data.suggestions.length > 0);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }

  function handleSuggestionClick(suggestion: any) {
    setSearch(suggestion.text);
    setShowSuggestions(false);

    // Trigger search immediately
    dispatch(
      getSearch({
        page: 1,
        searchString: suggestion.text,
        category: category.name,
      })
    );

    const searchParams = new URLSearchParams({
      q: suggestion.text,
      category: category.name,
    });

    navigate(`/search?${searchParams.toString()}`);
  }

  function handleOpenCategoryList() {
    setOpenCategoryList(!openCategoryList);
  }

  function handleOnSelectCategory(selectedCategory: SearchCategory) {
    setCategory(selectedCategory);
    setOpenCategoryList(false); // Close dropdown after selection
  }

  function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (search.trim().length === 0) {
      return; // Don't search if empty
    }

    // Dispatch search action to Redux
    dispatch(
      getSearch({
        page: 1,
        searchString: search.trim(),
        category: category.name,
      })
    );

    // Navigate to search results page with parameters
    const searchParams = new URLSearchParams({
      q: search.trim(),
      category: category.name,
    });

    navigate(`/search?${searchParams.toString()}`);
  }

  return (
    <div className={`navbar-search${onNav ? "" : " navbar-search-mobile"}`}>
      <div
        ref={dropdownRef}
        className="navbar-search-category-toggler"
        onClick={handleOpenCategoryList}
      >
        <div className="navbar-search-selected-category">{category.name}</div>
        {openCategoryList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        {openCategoryList && (
          <div className="dropdown-menu">
            <Dropdown
              category={category}
              categories={categories}
              handleOnSelectCategory={handleOnSelectCategory}
            />
          </div>
        )}
      </div>
      <form onSubmit={onSubmitHandler} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchInput}
            onFocus={() =>
              search.length >= 2 &&
              suggestions.length > 0 &&
              setShowSuggestions(true)
            }
          />
          {showSuggestions && suggestions.length > 0 && (
            <div ref={suggestionsRef} className="search-suggestions">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={`suggestion-item ${suggestion.type}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <span className="suggestion-text">{suggestion.text}</span>
                  <span className="suggestion-type">{suggestion.type}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
      <div className="navbar-search-magnifier">
        <FcSearch size={"1.5em"} />
      </div>
    </div>
  );
}

function Dropdown({
  category,
  categories,
  handleOnSelectCategory,
}: {
  category: SearchCategory;
  categories: SearchCategory[];
  handleOnSelectCategory: (category: SearchCategory) => void;
}) {
  return (
    <div className="dropdown">
      <ul className="categories" id="categories">
        {categories.map((categoryOption) => (
          <li
            key={categoryOption.id}
            onClick={() => handleOnSelectCategory(categoryOption)}
            className={category.id === categoryOption.id ? "selected" : ""}
          >
            {categoryOption.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
