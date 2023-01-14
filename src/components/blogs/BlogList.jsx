import React, { useEffect } from "react";
import CheerioAPI from "cheerio";

const BlogList = ({ blogs }) => {
  return (
    <>
      {blogs?.map((blog) => {
        return Object.entries(blog).map((item) => {
          const $ = CheerioAPI.load(item[1]?.data?.markdown?.summary);
          const src = $("img").attr("src");
          const alt = $("img").attr("alt");
          return (
            <div className="blog-list">
              <div>
                <h1 className="title">{item[1]?.data?.markdown?.title}</h1>
                <p className="body">
                  {CheerioAPI.load(item[1]?.data?.markdown?.summary).text(
                    $("body")
                  )}
                  ...
                </p>
              </div>
              <img src={src} border="0" alt={alt} />
            </div>
          );
        });
      })}
    </>
  );
};

export default BlogList;
