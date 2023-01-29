import React, { useState, useEffect } from "react";
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
import useFetchData from "hooks/useFecthData";

const Blog = () => {
  const { blogs } = useFetchData();
  const [selectedBlog, setSelectedBlog] = useState([]);
  const [blogId, setBlogId] = useState(JSON.parse(getValueFromLS("blogId")));
  const [likedCount, setLikedCount] = useState(selectedBlog?.data?.likedNum);
  const [sharelink, setShareLink] = useState();
  const [isLiked, setIsLiked] = useState(false);

  console.log(likedCount, "likedCount");
  /** run hook to find the selected blog */
  useEffect(() => {
    Object.entries(blogs || {}).map((blog) => {
      if (blog[0] === blogId) {
        setSelectedBlog(blog[1]);
        setLikedCount(blog[1]?.data?.likedNum);
      }
    });
  }, [blogs, blogId]);

  /** run hook to setting up the value of liked ==> true/false */
  useEffect(() => {
    setIsLiked(() => {
      if (
        JSON.parse(getValueFromLS("isliked"))?.includes(selectedBlog?.data?.id)
      ) {
        let valueFromLS = JSON.parse(getValueFromLS("isliked"))?.includes(
          selectedBlog?.data?.id
        );
        let match = String(valueFromLS)?.match(/(false|true)$/);
        return match[0];
      } else {
        return false;
      }
    });
  }, []);

  console.log(isLiked, "is liked");
  // /** Increase the like */
  const handleUnLikedHeartClick = () => {
    setIsLiked(true);
    // update firebase
    update(ref(db, `${auth.currentUser.uid}/${blogId}`), {
      data: {
        id: blogId,
        title: selectedBlog?.data?.title,
        summary: selectedBlog?.data?.summary,
        body: selectedBlog?.data?.body,
        likedNum: likedCount + 1,
      },
    });
    // updateing like
    setLikedCount((prev) => prev + 1);

    // updating localstorage for is like
    setValueToLS("isliked", `${selectedBlog?.data?.id}-true`);
  };

  // /** Decrease the like */
  const handleLikedHeartClick = () => {
    setIsLiked(false);
    // update firebase
    update(ref(db, `${auth.currentUser.uid}/${blogId}`), {
      data: {
        id: blogId,
        title: selectedBlog?.data?.title,
        summary: selectedBlog?.data?.summary,
        body: selectedBlog?.data?.body,
        likedNum: likedCount - 1,
      },
    });

    // updateing like
    setLikedCount((prev) => prev - 1);

    // updating localstorage for is like
    setValueToLS("isliked", `${selectedBlog?.data?.id}-false`);
  };

  // /** handle node click  show the links modal*/
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
        <div className="specific-blog-container">
          <MarkdownLib
            className={"specific-blog"}
            markdown={selectedBlog?.data?.body}
            key={uuidv4()}
          />
        </div>
        <div className="specific-blog-icons-container">
          {isLiked ? (
            <i
              className="fa-solid fa-heart heat-red"
              onClick={() => handleLikedHeartClick(selectedBlog?.data?.id)}
            ></i>
          ) : (
            <i
              className="fa-regular fa-heart"
              onClick={() => handleUnLikedHeartClick(selectedBlog?.data?.id)}
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

// const [showBlog, setShowBlog] = useState([
//   JSON.parse(getValueFromLS("blog")),
// ]);
// const [sharelink, setShareLink] = useState(false);
// const [isLiked, setIsLiekd] = useState(
//   // JSON.parse(getValueFromLS("isLikedBlog")) ?? false
//   showBlog[0]?.data?.likedNum > 0
// );
// console.log(showBlog[0]?.data?.likedNum > 0, "json value");

// document.body.addEventListener("click", (e) => {
//   if (
//     e.target.className.includes("fa-share-nodes") ||
//     e.target.className.includes("fa-twitter") ||
//     e.target.className.includes("fa-linkedin")
//   ) {
//     setShareLink(true);
//     return;
//   } else {
//     setShareLink(false);
//   }
// });
// const [likedCount, setLikedCount] = useState(
//   showBlog[0]?.data?.likedNum ?? 0
// );
