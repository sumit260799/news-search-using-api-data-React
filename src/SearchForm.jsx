import React from "react";
import { useGlobalContext } from "./Context";
function SearchForm() {
  const { query, handleSearch } = useGlobalContext();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>search news</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
