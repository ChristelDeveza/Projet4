/* eslint-disable react/prop-types */
import React from "react";

// Function search admin
function SearchAdmin({ searchValue, setSearchValue }) {
  return (
    <div>
      <h3 className="title-search">Rechercher</h3>
      <input
        className="searchbar"
        value={searchValue}
        type="text"
        placeholder="Rechercher"
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
}

export default SearchAdmin;
