import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSearchSelector } from "../../../selectors";
import { getSearch } from "../../../reducers";
import { FeaturedMerch } from "../../components/Cards";
import { Ripple } from "../../components/Buttons";
import { SearchFilter } from "view/components/SearchFilter";

export default function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchResult = useSearchSelector();
  const [isLoading, setIsLoading] = useState(true);

  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "All Categories";

  useEffect(() => {
    if (query.trim().length > 0) {
      setIsLoading(true);
      dispatch(
        getSearch({
          page: 1,
          searchString: query,
          category: category,
        })
      );

      // Set loading to false after a short delay to allow Redux to update
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    } else {
      // If no query, redirect to home
      navigate("/");
    }
  }, [dispatch, query, category, navigate]);

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Search Results</h1>
        <div className="search-info">
          <span className="search-query">"{query}"</span>
          {category !== "All Categories" && (
            <span className="search-category">in {category}</span>
          )}
        </div>
      </div>

      <SearchFilter />

      <div className="search-content">
        {isLoading ? (
          <div className="search-loading">
            <div className="loading-spinner">Searching...</div>
          </div>
        ) : searchResult && searchResult.length > 0 ? (
          <>
            <div className="search-results-count">
              Found {searchResult.length} results
            </div>
            <div className="search-merchs">
              {searchResult.map((result, index) => (
                <Ripple
                  key={result.id || index}
                  classes="search-ripple-featured-card"
                >
                  <FeaturedMerch {...result} />
                </Ripple>
              ))}
            </div>
          </>
        ) : (
          <div className="search-empty">
            <h3>No results found</h3>
            <p>Try searching with different keywords or check your spelling.</p>
            <button onClick={() => navigate("/")} className="btn-primary">
              Browse All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
