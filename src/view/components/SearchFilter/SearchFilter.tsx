import React, { useState } from "react";

export function SearchFilter() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('CAD');  
    const [selectedSortOption, setSelectedSortOption] = useState('Featured');  
    const currencies = ["CAD", "approx. USD", "approx. EUR", "approx. JPY", "approx. GBP"];
    const sortByText = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest Arrivals'];
    const [filterBtns, setFilterBtns] = useState([]); 
    const [isHololiveActive, setHololiveActive] = useState(false);
    const [isGenshinActive, setGenshinActive] = useState(false);
    const [isPlushActive, setPlushActive] = useState(false);
    const [isClearstandActive, setClearstandActive] = useState(false);
    const [isInstockActive, setInstockActive] = useState(false);
    const [isDiscountActive, setDiscountActive] = useState(false);
    const filterMap = {
        "Hololive": setHololiveActive,
        "Genshin": setGenshinActive,
        "Plush": setPlushActive,
        "Clear Stand": setClearstandActive,
        "In Stock": setInstockActive,
        "Discount": setDiscountActive
    };
  
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };
      
    const handleSortOptionChange = (event) => {
        setSelectedSortOption(event.target.value);
    };

    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
  
    const handleMinChange = (e) => {
      setMinValue(e.target.value);
    };
  
    const handleMaxChange = (e) => {
      setMaxValue(e.target.value);
    };
  
    const updateMinMax = () => {
      const min = parseFloat(minValue);
      const max = parseFloat(maxValue);
  
      if (!isNaN(min) && !isNaN(max)) {
        console.log(`Minimum: ${min}, Maximum: ${max}`);
      } else {
        console.log('Please enter valid numbers for both fields.');
      }
    };

    const addFilter = (filter, setState) => {
        if (!filterBtns.includes(filter)) {
            setFilterBtns([...filterBtns, filter]);
            setState(true)
        } else {
            // we want to remove if it is part of search filters
            const updatedFilters = filterBtns.filter(value => value !== filter);
            setFilterBtns(updatedFilters)
            setState(false)
        }
    }

    const removeFilter = (filter, index) => {
        const updatedFilters = [...filterBtns];
        updatedFilters.splice(index, 1);
        setFilterBtns(updatedFilters);
        filterMap[filter](false);
    }

    return (
    <div>
        <div className="search-filters">
            <div className="dropdown row1 general-style" style={{background: isOpen ? "grey" : "white", border: isOpen ? "white solid 1px" : "black solid 1px"}}>
                <button onClick={toggleDropdown} className="dropdown-button" style={{background: isOpen ? "grey" : "white", color: isOpen ? "white" : "black"}}>
                {isOpen ? "Hide Filters ^" : "Show Filters v"}
                </button>
                
            </div>

            <label className="row1 currency general-style">
                <select className="select-currency" name="selectedCurrency" value={selectedCurrency} onChange={handleCurrencyChange}>
                {currencies.map((currency, index) => (
                    <option key={index} value={currency}>{currency}</option>
                ))}
                </select>
            </label>

            <div className="row1 min-max">
                <input
                    type="tel"
                    id="minInput"
                    value={minValue}
                    onChange={handleMinChange}
                    onBlur={updateMinMax}
                    placeholder="Min"
                    className="min-max-input min-input"
                />
                <span className="to">to</span>
                <input
                    type="tel"
                    id="maxInput"
                    value={maxValue}
                    onChange={handleMaxChange}
                    onBlur={updateMinMax}
                    placeholder="Max"
                    className="min-max-input max-input"
                />
            </div>

            <label className="row1 sort-option general-style">
                <select className="select-sort-option" name="selectedSortOption" value={selectedSortOption} onChange={handleSortOptionChange}>
                {sortByText.map((sortOption, index) => (
                    <option key={index} value={sortOption}>{sortOption}</option>
                ))}
                </select>
            </label>
        </div>

                
        <div className="row2">
            {filterBtns.map((filter, index) => (
                <button className="general-style chosen-filter-button" key={index} onClick={()=>removeFilter(filter, index)}><span>+ </span>{filter}</button>
            ))}
        </div>
        

        <div className="dropdown">
            {isOpen && (    
            <div className="dropdown-content">
                <div>Series name</div>
                <button className={isHololiveActive ? "general-style-v2 dropdown-item" : "general-style dropdown-item"} onClick={()=>addFilter("Hololive", setHololiveActive)}><span>+ </span> Hololive</button>
                <button className={isGenshinActive ? "general-style-v2 dropdown-item" : "general-style dropdown-item"} onClick={()=>addFilter("Genshin", setGenshinActive)}><span>+ </span> Genshin</button>
                <div>Product type</div>
                <button className={isPlushActive ? "general-style-v2 dropdown-item" : "general-style dropdown-item"} onClick={()=>addFilter("Plush", setPlushActive)}><span>+ </span> Plush</button>
                <button className={isClearstandActive ? "general-style-v2 dropdown-item" : "general-style dropdown-item"} onClick={()=>addFilter("Clear Stand", setClearstandActive)}><span>+ </span> Clear Stand</button>
                <div>Availability/Sales</div>
                <button className={isInstockActive ? "general-style-v2 dropdown-item" : "general-style dropdown-item"} onClick={()=>addFilter("In Stock", setInstockActive)}><span>+ </span> In Stock</button>
                <button className={isDiscountActive ? "general-style-v2 dropdown-item" : "general-style dropdown-item"} onClick={()=>addFilter("Discounts", setDiscountActive)}><span>+ </span> Discounts</button>
            </div>
            )}
        </div>

    </div>
    );
}
  