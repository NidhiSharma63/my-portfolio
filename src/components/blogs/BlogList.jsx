import React from "react";
import CheerioAPI from "cheerio";
import { uuidv4 } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectBlog } from "store/blogSlice";
import addSlug from "utlis/addSlug";
const BlogList = ({ blogs }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (blog) => {
    navigation(`/blog/${addSlug(blog?.data?.title)}`);
    dispatch(selectBlog(blog));
  };

  return (
    <>
      {blogs?.blog !== null
        ? blogs?.map((blog) => {
            console.log(blog);
            return Object.entries(blog)?.map((item) => {
              const $ = CheerioAPI.load(item[1]?.data?.summary);
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
                    <h1 className="title">{item[1]?.data?.title}</h1>
                    <p className="body">
                      {CheerioAPI.load(item[1]?.data?.summary).text($("body"))}
                      ...
                    </p>
                    <div className="icons-container">
                      {" "}
                      <i class="fa-sharp fa-solid fa-trash red"></i>
                      <i class="fa-solid fa-pen-to-square green"></i>
                    </div>
                  </div>
                  <img src={src} border="0" alt={alt} />
                </div>
              );
            });
          })
        : ""}
    </>
  );
};

export default BlogList;
