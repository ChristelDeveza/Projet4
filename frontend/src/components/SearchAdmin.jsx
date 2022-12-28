/* eslint-disable react/prop-types */
import React from "react";

function SearchAdmin({ searchValue, setSearchValue }) {
  return (
    <div>
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
