import React from "react";
import { useSelector } from "react-redux";
import { blogDataInStore } from "store/blogSlice";
import MarkdownLib from "components/common/MarkDown";
import { uuidv4 } from "@firebase/util";
import { Link } from "react-router-dom";
const Blog = () => {
  const selectedBlog = useSelector(blogDataInStore);

  return (
    <div className="main-wrapper">
      <header className="specific-blog-header">
        <p>Nidhi</p>
        <div>
          <ul>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/blogs">Blog List</Link>
            </li>
          </ul>
        </div>
      </header>
      {selectedBlog?.map((item) => {
        return (
          <MarkdownLib
            className={"specific-blog"}
            markdown={item?.data?.body}
            key={uuidv4()}
          />
        );
      })}
    </div>
  );
};

export default Blog;
