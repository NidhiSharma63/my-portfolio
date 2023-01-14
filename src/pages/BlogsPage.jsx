import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BlogList from "components/blogs/BlogList";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  /**
   * fetch data
   */

  async function getBlogs() {
    try {
      const res = await fetch(
        "https://my-project-46f18-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json"
      );

      const data = await res.json();
      setBlogs([data]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="main-blog-wrapper">
      <div className="blog-header">
        <p>Nidhi</p>
        <Link>Home</Link>
      </div>
      <div className="blog-intro">
        <h1>Welcome to the Front-end Development Blog! </h1>
        <p>
          Here you'll find all the latest insights, tutorials and best practices
          from one passionate front-end developer. From modern JavaScript
          frameworks to design trends, this blog is your go-to destination for
          staying up to date with the constantly evolving front-end development
          landscape. Dive into our latest posts. We hope you find our content
          informative and enjoyable and look forward to sharing our knowledge
          with you.
        </p>
      </div>
      <div className="blog-list-container">
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
};

export default BlogsPage;
