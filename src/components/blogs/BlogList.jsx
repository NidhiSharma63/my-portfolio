import React from "react";
import CheerioAPI from "cheerio";
import { uuidv4 } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectBlog } from "store/blogSlice";

const BlogList = ({ blogs }) => {
  const navigation = useNavigate();
  const handleClick = (blog) => {
    navigation("/blog/blog");
    dispatch(selectBlog(blog));
  };

  const dispatch = useDispatch();

  return (
    <>
      {blogs?.map((blog) => {
        return Object.entries(blog).map((item) => {
          const $ = CheerioAPI.load(item[1]?.data?.markdown?.summary);
          const src = $("img").attr("src");
          const alt = $("img").attr("alt");
          return (
            <div
              className="blog-list"
              key={uuidv4()}
              onClick={() => {
                handleClick(item[1]);
              }}
            >
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
