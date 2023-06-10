import React from "react";
import { useGlobalContext } from "./Context";
function Stories() {
  const { isLoading, hits, removeData } = useGlobalContext();
  if (isLoading) {
    return <span className="loader grid"></span>;
  }
  return (
    <section className=" grid sm:grid-cols-2 gap-6 ">
      {hits.map((story) => {
        const { objectID, title, author, url, points, num_comments } = story;
        return (
          <article
            key={objectID}
            className="my-1 border bg-[#ffffff] p-3 px-5 rounded-md shadow-sm"
          >
            <h4 className="text-[1.2rem] mb-2 font-medium text-black capitalize tracking-[0.1rem]">
              {title}
            </h4>
            <p className="text-[1rem] text-zinc-500 tracking-normal">
              {points} points by <span>{author} |</span> {num_comments} comments
            </p>
            <div className="mt-2">
              <a className="text-[#54a9e9]" href={url}>
                read more
              </a>
              <button
                className="ml-5 text-red-700"
                onClick={() => removeData(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Stories;
