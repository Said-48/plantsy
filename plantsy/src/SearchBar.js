import React from "react";
function SearchBar({ onSearch }) {
    return (
        <div>
            <h4>Search Plants:</h4>
            <input
                type="text"
                placeholder="Type a name to search..."
                className="search-input"
                onChange={onSearch}
            />
        </div>
    );
}

export default SearchBar;