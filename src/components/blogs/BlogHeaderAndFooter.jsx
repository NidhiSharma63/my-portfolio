import React from "react";
import { Link } from "react-router-dom";
import BlogFooter from "components/blogs/BlogFooter";

const BlogHeaderAndFooter = ({ children }) => {
  return (
    <>
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
      {children}
      <BlogFooter />
    </>
  );
};

export default BlogHeaderAndFooter;
