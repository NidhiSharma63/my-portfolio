import React, { useState } from "react";
import MarkdownLib from "components/common/MarkDown";
import { uuidv4 } from "@firebase/util";
import { Link } from "react-router-dom";
import { getValueFromLS } from "utlis/Localstorage";

const Blog = () => {
  const [showBlog, setShowBlog] = useState([
    JSON.parse(getValueFromLS("blog")),
  ]);

  /** submit comment */

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

      {showBlog?.map((item) => {
        return (
          <React.Fragment key={item?.data?.id}>
            <MarkdownLib
              className={"specific-blog"}
              markdown={item?.data?.body}
              key={uuidv4()}
            />
          </React.Fragment>
        );
      })}
      {/* <Comments /> */}

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
