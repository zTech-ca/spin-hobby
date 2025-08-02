import React, { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

interface Category {
  id: string;
  name: string;
  description?: string;
  img?: string;
  featured: boolean;
  productCount: number;
  parentCategoryId?: string;
  subcategories?: Category[];
}

export default function Navigation() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch categories from API
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:8001/api/v1/categories?featured=true&parent_only=true"
      );
      const data = await response.json();
      if (data.success) {
        // Sort categories, prioritize featured ones
        const sortedCategories = data.data.sort((a: Category, b: Category) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.name.localeCompare(b.name);
        });
        setCategories(sortedCategories);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryClick = (category: Category) => {
    // Navigate to category page (implement based on your routing)
    console.log("Navigate to category:", category.name);
    setIsDropdownOpen(false);
  };

  return (
    <div className="navigation">
      <div className="nav-container">
        {/* Categories Dropdown */}
        <div
          className="nav-item dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="nav-link dropdown-trigger">
            <span>Categories</span>
            <IoChevronDown
              className={`chevron ${isDropdownOpen ? "open" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu categories-dropdown">
              {isLoading ? (
                <div className="dropdown-loading">Loading categories...</div>
              ) : categories.length > 0 ? (
                <>
                  <div className="dropdown-header">Shop by Category</div>
                  <div className="categories-grid">
                    {categories.slice(0, 16).map((category) => (
                      <button
                        key={category.id}
                        className="category-item"
                        onClick={() => handleCategoryClick(category)}
                      >
                        <div className="category-name">{category.name}</div>
                      </button>
                    ))}
                  </div>
                  {categories.length > 16 && (
                    <div className="dropdown-footer">
                      <button className="view-all-btn">
                        View All Categories ({categories.length})
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="dropdown-empty">No categories available</div>
              )}
            </div>
          )}
        </div>

        {/* Contact Link */}
        <a href="/contact" className="nav-item">
          <button className="nav-link">Contact</button>
        </a>

        {/* Support Link */}
        <a href="/support" className="nav-item">
          <button className="nav-link">Support</button>
        </a>
      </div>
    </div>
  );
}
