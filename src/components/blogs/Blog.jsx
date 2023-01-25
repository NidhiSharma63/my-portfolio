import React, { useState } from "react";
import MarkdownLib from "components/common/MarkDown";
import { uuidv4 } from "@firebase/util";
import { Link } from "react-router-dom";
import { getValueFromLS, setValueToLS } from "utlis/Localstorage";
import { useNavigate } from "react-router-dom";

import mainImg from "assets/images/Edited/my1.jpg";
import { ref, update } from "firebase/database";
import { auth, db } from "auth/auth";

import BlogHeaderAndFooter from "components/blogs/BlogHeaderAndFooter";
import LinkModal from "./Portal";

const Blog = () => {
  const [showBlog, setShowBlog] = useState([
    JSON.parse(getValueFromLS("blog")),
  ]);
  const [sharelink, setShareLink] = useState(false);
  const [isLiked, setIsLiekd] = useState(
    JSON.parse(getValueFromLS("isLikedBlog")) ?? false
  );

  document.body.addEventListener("click", (e) => {
    if (
      e.target.className.includes("fa-share-nodes") ||
      e.target.className.includes("fa-twitter") ||
      e.target.className.includes("fa-linkedin")
    ) {
      setShareLink(true);
      return;
    } else {
      setShareLink(false);
    }
  });
  const [likedCount, setLikedCount] = useState(
    showBlog[0]?.data?.likedNum ?? ""
  );

  /** Increase the like */
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
  /** Decrease the like */
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

  /** handle node click  show the links modal*/
  const handelNodeClick = () => {
    setShareLink((prev) => (prev = !prev));
  };

  /** handleTwitterClick generate the twitter link */
  const handleTwitterClick = () => {
    const url =
      "https://twitter.com/intent/tweet?text=http%3A//localhost%3A3000/blog/Bageshwar";
    window.open(url, "_blank");
  };
  /** handleLinkedInClick generate the linkedin link */
  const handleLinkedInClick = () => {
    const url =
      "https://www.linkedin.com/shareArticle?mini=true&url=http%3A//localhost%3A3000/blog/Bageshwar";
    window.open(url, "_blank");
  };

  /** submit comment */

  return (
    <div className="main-wrapper">
      <BlogHeaderAndFooter>
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
                <div>
                  <i
                    className="fa-solid fa-share-nodes"
                    onClick={handelNodeClick}
                  ></i>
                </div>
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
                  Hi there! My name is Nidhi sharma and I am a frontend
                  developer currently working as an intern. I have a strong
                  passion for creating user-friendly and visually appealing
                  websites and applications, and I am always looking to learn
                  and improve my skills. As a frontend developer, I use a
                  variety of programming languages and tools, such as HTML, CSS,
                  and JavaScript, React, to bring my designs to life and make
                  them interactive and responsive. I am excited to have the
                  opportunity to learn from and contribute to a team of
                  experienced developers. I am eager to take on new challenges
                  and to apply my skills and knowledge to real-world projects.
                </p>
              </div>
            </React.Fragment>
          );
        })}
        {sharelink ? (
          <LinkModal>
            <p>Share this article with</p>
            <div>
              <i
                className="fa-brands fa-twitter"
                onClick={handleTwitterClick}
              ></i>
              <i
                className="fa-brands fa-linkedin"
                onClick={handleLinkedInClick}
              ></i>
            </div>
          </LinkModal>
        ) : null}
      </BlogHeaderAndFooter>
    </div>
  );
};

export default Blog;
