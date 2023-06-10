import React from "react";
import { useGlobalContext } from "./Context";
function Pagination() {
  const { handlePage, page, nbPages } = useGlobalContext();
  return (
    <div className="text-center flex justify-center items-center  mb-5 gap-7">
      <button
        className="bg-[#54a9e9] text-white text-[1.1rem] font-medium px-2 pb-1 text-center  rounded-md"
        onClick={() => handlePage("dec")}
      >
        prev
      </button>
      <p className="font-medium text-[1.4rem] text-zinc-500">
        {page + 1} of {nbPages}
      </p>
      <button
        className="bg-[#54a9e9] text-white text-[1.1rem] font-medium px-2 pb-1 rounded-md"
        onClick={() => handlePage("inc")}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
