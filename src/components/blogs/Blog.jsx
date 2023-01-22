import React from "react";
import { useSelector } from "react-redux";
import { blogDataInStore } from "store/blogSlice";
import MarkdownLib from "components/common/MarkDown";
import { uuidv4 } from "@firebase/util";
import { Link } from "react-router-dom";

import { useState } from "react";

const Blog = () => {
  const { selectBlog } = useSelector(blogDataInStore);
  console.log(selectBlog, "slelect");
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

      {selectBlog?.map((item) => {
        return (
          <MarkdownLib
            className={"specific-blog"}
            markdown={item?.data?.body}
            key={uuidv4()}
          />
        );
      })}
      {/* <CommentSection
        currentUser={{
          currentUserId: "01a",
          currentUserImg:
            "https://ui-avatars.com/api/name=Riya&background=random",
          currentUserProfile:
            "https://www.linkedin.com/in/riya-negi-8879631a9/",
          currentUserFullName: "Riya Negi",
        }}
        commentData={data}
        logIn={{
          loginLink: "http://localhost:3001/",
          signupLink: "http://localhost:3001/",
        }}
        onSubmitAction={(data) => console.log("check submit, ", data)}
        currentData={(data) => {
          console.log("curent data", data);
        }}
      /> */}
    </div>
  );
};

export default Blog;
