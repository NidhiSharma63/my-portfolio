import React from "react";
import { useSelector } from "react-redux";
import { blogDataInStore } from "store/blogSlice";
import MarkdownLib from "components/common/MarkDown";
import { uuidv4 } from "@firebase/util";

const Blog = () => {
  const selectedBlog = useSelector(blogDataInStore);

  return (
    <>
      {selectedBlog?.map((item) => {
        console.log(selectedBlog);
        return (
          <MarkdownLib
            className="custom"
            markdown={item?.data.markdown.body}
            key={uuidv4()}
          />
        );
      })}
    </>
  );
};

export default Blog;
