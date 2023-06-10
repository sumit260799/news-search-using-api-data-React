import React from "react";
import { useGlobalContext } from "./Context";
function SearchForm() {
  const { query, handleSearch } = useGlobalContext();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="myForm  my-2 sm:my-8">
      <h2 className="text-[2.5rem] capitalize tracking-[0.3rem]  font-semibold text-zinc-600">
        search news
      </h2>
      <input
        type="text"
        value={query}
        className="sm:w-[50%] w-[80%]  p-2 my-5 rounded-md bg-transparent outline-none max-w-[600px] tracking-[0.175rem]  border-blue-500 border-2  shadow-md"
        onChange={(e) => handleSearch(e.target.value)}
      />{" "}
    </form>
  );
}

export default SearchForm;
