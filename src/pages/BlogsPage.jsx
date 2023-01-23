import React, { useEffect } from "react";
import { uuidv4 } from "@firebase/util";
import * as cheerio from "cheerio";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import addSlug from "utlis/addSlug";
import {
  selectBlog,
  setEditBlogUuid,
  setEditblog,
  setIsEdit,
  deSelectBlog,
} from "store/blogSlice";
import { auth, db } from "auth/auth";
import { ref, remove } from "firebase/database";
import { toast } from "react-toastify";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const deleteNoitify = () => toast.success("Blog Deleted Successfully");

  const fetchData = async () => {
    const res = await fetch(
      "https://myproject-92249-default-rtdb.firebaseio.com/gv0XmbJt6WTU5UGUTCJHVezoxin2.json"
    );
    const data = await res.json();
    setBlogs(data);
  };
  /**
   * useEffect to fetch data when component mount
   */
  useEffect(() => {
    dispatch(deSelectBlog());

    fetchData();
  }, []);

  /* navigate */
  const handleClick = (blog) => {
    navigation(`/blog/${addSlug(blog?.data?.title)}`);
    dispatch(selectBlog(blog));
  };

  /* Delete the blog */

  const deleteBlog = (e, id) => {
    e.stopPropagation();
    const action = window.confirm("Are you sure want to delete this blog");
    if (action) {
      remove(ref(db, `${auth.currentUser.uid}/${id}`)).then(() => {
        deleteNoitify();
      });
      return;
    }
    return;
  };

  /* handle click edit blog */
  const handleEditClick = (e, blog) => {
    e.stopPropagation();

    dispatch(setEditBlogUuid(blog?.data?.id));
    dispatch(setEditblog(blog));
    dispatch(setIsEdit(true));
    navigation("/admin");
  };

  return (
    <div className="main-blog-wrapper main-container">
      <div className="blog-header">
        <p>Nidhi</p>
        <Link to="/">Home</Link>
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
        {Object.entries(blogs || {}).map((blog) => {
          return [blog[1]]?.map((blog) => {
            const $ = cheerio.load(blog?.data?.summary);
            const src = $("img").attr("src");
            const alt = $("img").attr("alt");
            return (
              <div
                className="blog-list"
                key={uuidv4()}
                onClick={() => {
                  handleClick(blog);
                }}
              >
                <div>
                  <h1 className="title">{blog?.data?.title}</h1>
                  <p className="body">
                    {cheerio.load(blog?.data?.summary).text($("body"))}
                  </p>
                  {localStorage.getItem("role") === "admin" ? (
                    <div className="icons-container">
                      {" "}
                      <i
                        className="fa-sharp fa-solid fa-trash red"
                        onClick={(e) => {
                          deleteBlog(e, blog.data.id);
                        }}
                      ></i>
                      <i
                        className="fa-solid fa-pen-to-square green"
                        onClick={(e) => {
                          handleEditClick(e, blog);
                        }}
                      ></i>
                    </div>
                  ) : null}
                </div>
                <img src={src} alt={alt} />
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default BlogsPage;

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // this is function to get data from firebase realtime.
//     GetFirebaseData();
//   } else {
//     alert("you need to login");
//   }
// });

// function GetFirebaseData() {
//   const starCountRef = ref(db, "gv0XmbJt6WTU5UGUTCJHVezoxin2");
//   onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();

//     console.log(data);
//   });
// }
