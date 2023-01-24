import React, { useState } from "react";
import { useSelector } from "react-redux";
import { blogDataInStore } from "store/blogSlice";
import MarkdownLib from "components/common/MarkDown";
import { uuidv4 } from "@firebase/util";
import { json, Link } from "react-router-dom";
import Comments from "components/comments/Comments";
import { set, ref, update } from "firebase/database";
import { auth, db } from "auth/auth";
import { getValueFromLS, setValueToLS } from "utlis/Localstorage";

const Blog = () => {
  const [showBlog, setShowBlog] = useState([
    JSON.parse(getValueFromLS("blog")),
  ]);
  const [commentvalue, setCommentValue] = useState(
    showBlog[0]?.data?.coments ?? []
  );
  const [addNewComment, setAddNewComment] = useState("");

  const handleSubmit = (editBlogUuid) => {
    let blog = JSON.parse(getValueFromLS("blog"));
    setCommentValue([addNewComment, ...commentvalue]);
    update(ref(db, `${auth.currentUser.uid}/${editBlogUuid}`), {
      data: {
        id: editBlogUuid,
        title: showBlog[0]?.data?.title,
        summary: showBlog[0]?.data?.summary,
        body: showBlog[0]?.data?.body,
        coments: [addNewComment, ...commentvalue],
      },
    });
    // update local storage

    if (blog) {
      [blog].map((item) => {
        if (item?.data?.coments) {
          let comme = [addNewComment, ...commentvalue];
          item.data.coments = comme;
        }
      });
    }
    setValueToLS("blog", blog);
  };

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
        console.log(item?.data?.coments, "comin");
        return (
          <React.Fragment key={item?.data?.id}>
            <MarkdownLib
              className={"specific-blog"}
              markdown={item?.data?.body}
              key={uuidv4()}
            />
            <div>
              {commentvalue.map((coment) => {
                return <h1>{coment}</h1>;
              })}
            </div>
            <div className="comment-section">
              <textarea
                value={addNewComment}
                onChange={(e) => setAddNewComment(e.target.value)}
              ></textarea>
              <button
                onClick={() => {
                  handleSubmit(item?.data?.id);
                }}
              >
                Send
              </button>
              {/* <button
                onClick={() => {
                  handeUpdateValueInLs(item?.data?.id);
                }}
              >
                testing
              </button> */}
            </div>
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
