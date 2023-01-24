import React, { useState } from "react";
import MarkdownLib from "components/common/MarkDown";
import { uuidv4 } from "@firebase/util";
import { Link } from "react-router-dom";
import { getValueFromLS, setValueToLS } from "utlis/Localstorage";

import mainImg from "assets/images/Edited/my1.jpg";
import { ref, update } from "firebase/database";
import { auth, db } from "auth/auth";

const Blog = () => {
  const [showBlog, setShowBlog] = useState([
    JSON.parse(getValueFromLS("blog")),
  ]);
  const [isLiked, setIsLiekd] = useState(
    JSON.parse(getValueFromLS("isLikedBlog")) ?? false
  );

  const [likedCount, setLikedCount] = useState(
    showBlog[0]?.data?.likedNum ?? ""
  );

  const handleUnLikedHeartClick = (editBlogUuid) => {
    let blog = JSON.parse(getValueFromLS("blog"));
    setIsLiekd(true);
    setValueToLS("isLikedBlog", true);
    setLikedCount((prev) => parseInt(prev) + 1);

    // update firebase
    update(ref(db, `${auth.currentUser.uid}/${editBlogUuid}`), {
      data: {
        id: editBlogUuid,
        title: showBlog[0]?.data?.title,
        summary: showBlog[0]?.data?.summary,
        body: showBlog[0]?.data?.body,
        likedNum: likedCount + 1,
      },
    });

    // update localStorage
    if (blog) {
      [blog].map((item) => {
        if (item?.data?.likedNum) {
          let newLike = likedCount + 1;
          item.data.likedNum = newLike;
        }
      });
    }
    setValueToLS("blog", blog);
  };
  const handleLikedHeartClick = (editBlogUuid) => {
    let blog = JSON.parse(getValueFromLS("blog"));
    setIsLiekd(false);
    setLikedCount((prev) => parseInt(prev) - 1);
    setValueToLS("isLikedBlog", false);

    // update firebase
    update(ref(db, `${auth.currentUser.uid}/${editBlogUuid}`), {
      data: {
        id: editBlogUuid,
        title: showBlog[0]?.data?.title,
        summary: showBlog[0]?.data?.summary,
        body: showBlog[0]?.data?.body,
        likedNum: likedCount - 1,
      },
    });

    // update localStorage
    if (blog) {
      [blog].map((item) => {
        if (item?.data?.likedNum) {
          let newLike = likedCount - 1;
          item.data.likedNum = newLike;
        }
      });
      setValueToLS("blog", blog);
    }
  };

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
            <div className="specific-blog-container">
              <MarkdownLib
                className={"specific-blog"}
                markdown={item?.data?.body}
                key={uuidv4()}
              />
            </div>
            <div className="specific-blog-icons-container">
              {isLiked ? (
                <i
                  className="fa-solid fa-heart heat-red"
                  onClick={() => handleLikedHeartClick(item?.data?.id)}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-heart"
                  onClick={() => handleUnLikedHeartClick(item?.data?.id)}
                ></i>
              )}
              <p>{likedCount}</p>
              <i className="fa-solid fa-share-nodes"></i>
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
                currently working as an intern. I have a strong passion for
                creating user-friendly and visually appealing websites and
                applications, and I am always looking to learn and improve my
                skills. As a frontend developer, I use a variety of programming
                languages and tools, such as HTML, CSS, and JavaScript, React,
                to bring my designs to life and make them interactive and
                responsive. I am excited to have the opportunity to learn from
                and contribute to a team of experienced developers. I am eager
                to take on new challenges and to apply my skills and knowledge
                to real-world projects.
              </p>
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
