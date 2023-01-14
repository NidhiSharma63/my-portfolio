import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { blogDataInStore } from "store/blogSlice";

const Blog = () => {
  const selectedBlog = useSelector(blogDataInStore);
  console.log(selectedBlog);
  return <h1>Blog</h1>;
};

export default Blog;
