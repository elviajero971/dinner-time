// src/components/SearchBar/SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="search-bar-container">
            <input
                className="search-bar-input"
                type="text"
                placeholder="Search by ingredient..."
                value={query}
                onChange={handleInputChange}
            />
            <button className="search-bar-button" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
