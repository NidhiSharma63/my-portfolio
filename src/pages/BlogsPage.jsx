import React, { useEffect } from "react";
import CheerioAPI from "cheerio";
import { uuidv4 } from "@firebase/util";
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
} from "store/blogSlice";
import { auth, db } from "auth/auth";
import { onValue, ref, remove } from "firebase/database";
import { toast } from "react-toastify";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const deleteNoitify = () => toast.success("Blog Deleted Successfully");

  /**
   * useEffect to fetch data when component mount
   */
  useEffect(() => {
    // dispatch(deSelectBlog());

    auth.onAuthStateChanged((user) => {
      if (user) {
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          setBlogs([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((blog) => {
              setBlogs((prev) => [blog, ...prev]);
            });
          }
        });
      }
    });
  }, [dispatch]);

  /* navigate */
  const handleClick = (blog) => {
    navigation(`/blog/${addSlug(blog?.data?.title)}`);
    dispatch(selectBlog(blog));
  };

  /* Delete the blog */

  const deleteBlog = (e, id) => {
    e.stopPropagation();
    remove(ref(db, `${auth.currentUser.uid}/${id}`)).then(() => {
      deleteNoitify();
    });
  };

  /* handle click edit blog */
  const handleEditClick = (e, blog) => {
    e.stopPropagation();
    console.log(blog);

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
        {blogs?.map((blog) => {
          const $ = CheerioAPI.load(blog?.data?.summary);
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
                  {CheerioAPI.load(blog?.data?.summary).text($("body"))}
                </p>
                {localStorage.getItem("user") === "admin" ? (
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
              <img src={src} border="0" alt={alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
