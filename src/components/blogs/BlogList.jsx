import React from "react";
import CheerioAPI from "cheerio";
import { uuidv4 } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectBlog } from "store/blogSlice";

import addSlug from "utlis/addSlug";
import { collection, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";

import { db } from "auth/auth";

const BlogList = async ({ blogs }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const testing = await deleteDoc(doc(db, "blogs", "-NM8ofopXKPyROzJ8l1i"));
  console.log(testing);

  /* navigate */
  const handleClick = (blog) => {
    navigation(`/blog/${addSlug(blog?.data?.title)}`);
    dispatch(selectBlog(blog));
  };

  /* Delete the blog */

  const deleteBlog = async (e) => {
    e.stopPropagation();
    const res = await fetch(
      "https://my-project-46f18-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json",
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          id: "NLnb4IjBeYZ06EuSnV6",
        },
      }
    );
    // firebase.
    // database()
    //   .ref()
    //   .child(`path/to/child/${childId}`)
    //   .remove()
    //   .then(() => {
    //     console.log("Child deleted successfully!");
    //   })
    //   .catch((error) => {
    //     console.log("Error deleting child:", error);
    //   });
  };
  console.log(blogs, "nlogs");

  return (
    <>
      {/* {blogs?.blog !== null
        ? blogs?.map((blog) => {
            return Object.entries(blog)?.map((item) => {
              const $ = CheerioAPI.load(item[1]?.data?.summary);
              const src = $("img").attr("src");
              const alt = $("img").attr("alt");
              return (
                <div
                  className="blog-list"
                  key={uuidv4()}
                  onClick={() => {
                    handleClick(item[1]);
                  }}
                >
                  <div>
                    <h1 className="title">{item[1]?.data?.title}</h1>
                    <p className="body">
                      {CheerioAPI.load(item[1]?.data?.summary).text($("body"))}
                    </p>
                    {localStorage.getItem("user") === "admin" ? (
                      <div className="icons-container">
                        {" "}
                        <i
                          className="fa-sharp fa-solid fa-trash red"
                          onClick={deleteBlog}
                        ></i>
                        <i className="fa-solid fa-pen-to-square green"></i>
                      </div>
                    ) : null}
                  </div>
                  <img src={src} border="0" alt={alt} />
                </div>
              );
            });
          })
        : ""} */}
    </>
  );
};

export default BlogList;
