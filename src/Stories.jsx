import React from "react";
import { useGlobalContext } from "./Context";
function Stories() {
  const { isLoading, hits, removeData } = useGlobalContext();
  if (isLoading) {
    return <span className="loader grid"></span>;
  }
  return (
    <section className="w-[80%] grid grid-cols-2 gap-6   mx-auto">
      {hits.map((story) => {
        const { objectID, title, author, url, points, num_comments } = story;
        return (
          <article key={objectID} className="my-1 border bg-[#ffffff]">
            <h4>{title}</h4>
            <p>
              {points}points by <span>{author} |</span> {num_comments} comments
            </p>
            <div>
              <a href={url}>read more</a>
              <button className="ml-5" onClick={() => removeData(objectID)}>
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
