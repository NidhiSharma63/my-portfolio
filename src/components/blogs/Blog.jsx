import React, { useState, useEffect } from "react";
import MarkdownLib from "components/common/MarkDown";
import { uuidv4 } from "@firebase/util";
import { getValueFromLS, setValueToLS } from "utlis/Localstorage";
import { Helmet } from "react-helmet";
import mainImg from "assets/images/Edited/my1.jpg";
import { ref, update } from "firebase/database";
import { auth, db } from "auth/auth";

import BlogHeaderAndFooter from "components/blogs/BlogHeaderAndFooter";
import LinkModal from "./Portal";
import useFetchData from "hooks/useFecthData";

const Blog = () => {
  const { blogs } = useFetchData();
  const [selectedBlog, setSelectedBlog] = useState([]);
  const [blogId, setBlogId] = useState(JSON.parse(getValueFromLS("blogId")));

  /** run hook to find the selected blog */
  useEffect(() => {
    Object.entries(blogs || {}).map((blog) => {
      if (blog[0] === blogId) {
        setSelectedBlog(blog[1]);
      }
    });
  }, [blogs, blogId]);

  /** submit comment */

  return (
    <div className="main-wrapper">
      <Helmet>
        <title>{selectedBlog?.data?.title}</title>
        <meta
          name="description"
          content={selectedBlog?.data?.summary.replace(/<img.*?>/g, "")}
        />
      </Helmet>
      <BlogHeaderAndFooter>
        <div className="specific-blog-container">
          <MarkdownLib
            className={"specific-blog"}
            markdown={selectedBlog?.data?.body}
            key={uuidv4()}
          />
        </div>

        <div className="about-author">
          <div className="col-1">
            <div className="autho-img">
              <img src={mainImg} alt="author" />
            </div>
            <div className="upper-text">
              <strong>WRITTEN BY</strong>
              <p>Nidhi Sharma</p>
            </div>
          </div>
          <p className="col-2">
            Hi there! My name is Nidhi sharma and I am a frontend developer
            currently working as an intern. I have a strong passion for creating
            user-friendly and visually appealing websites and applications, and
            I am always looking to learn and improve my skills. As a frontend
            developer, I use a variety of programming languages and tools, such
            as HTML, CSS, and JavaScript, React, to bring my designs to life and
            make them interactive and responsive. I am excited to have the
            opportunity to learn from and contribute to a team of experienced
            developers. I am eager to take on new challenges and to apply my
            skills and knowledge to real-world projects.
          </p>
        </div>
      </BlogHeaderAndFooter>
    </div>
  );
};

export default Blog;
