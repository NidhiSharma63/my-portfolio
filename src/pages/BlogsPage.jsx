import React from "react";
import { uuidv4 } from "@firebase/util";
import * as cheerio from "cheerio";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import addSlug from "utlis/addSlug";
import { setEditBlogUuid, setEditblog, setIsEdit } from "store/blogSlice";
import { ref, remove } from "firebase/database";
import { toast } from "react-toastify";
import { setValueToLS, getValueFromLS } from "utlis/Localstorage";
import useFetchData from "hooks/useFecthData";
import { Helmet } from "react-helmet-async";
const BlogsPage = () => {
  const { blogs } = useFetchData();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const deleteNoitify = () => toast.success("Blogs Deleted Successfully");

  /* navigate */
  const handleClick = (blog) => {
    navigation(`/blog/${addSlug(blog?.data?.title)}`);
    setValueToLS("blogId", blog.data.id);
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
      <Helmet>
        <title>Nidhi's Blog</title>
        <meta
          name="description"
          content=" Here you'll find all the latest insights, tutorials and best practices
          from one passionate front-end developer"
        />
        <link rel="canonical " href="/blogs" />
      </Helmet>
      <div className="blog-header">
        <p>Nidhi</p>
        <Link to="/">Home</Link>
      </div>
      <div className="blog-intro">
        <h1>Welcome to the Front-end Development Blog! </h1>
        <p>
          Here you'll find all the latest insights, tutorials and best practices from one passionate front-end
          developer. From modern JavaScript frameworks to design trends, this blog is your go-to destination for staying
          up to date with the constantly evolving front-end development landscape. Dive into our latest posts. We hope
          you find our content informative and enjoyable and look forward to sharing our knowledge with you.
        </p>
      </div>
      <div className="blog-list-container">
        {Object.entries(blogs || {}).map((blog) => {
          const $ = cheerio.load(blog[1]?.data?.summary);
          const src = $("img").attr("src");
          const alt = $("img").attr("alt");
          return (
            <div
              className="blog-list"
              key={uuidv4()}
              onClick={() => {
                handleClick(blog[1]);
              }}>
              <div>
                <h1 className="title">{blog[1]?.data?.title}</h1>
                <p className="body">{cheerio.load(blog[1]?.data?.summary).text($("body"))}</p>
                {JSON.parse(getValueFromLS("role")) === "admin" ? (
                  <div className="icons-container">
                    {" "}
                    <i
                      className="fa-sharp fa-solid fa-trash red"
                      onClick={(e) => {
                        deleteBlog(e, blog[1].data.id);
                      }}></i>
                    <i
                      className="fa-solid fa-pen-to-square green"
                      onClick={(e) => {
                        handleEditClick(e, blog[1]);
                      }}></i>
                  </div>
                ) : null}
              </div>
              <img src={src} alt={alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
