import React from "react";
import { useGlobalContext } from "./Context";
function Pagination() {
  const { handlePage, page, nbPages } = useGlobalContext();
  return (
    <div>
      <button onClick={() => handlePage("dec")}>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => handlePage("inc")}>next</button>
    </div>
  );
}

export default Pagination;
