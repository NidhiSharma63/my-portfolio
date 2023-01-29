import { useState, useEffect } from "react";

const useFetchData = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    const res = await fetch(
      "https://myproject-92249-default-rtdb.firebaseio.com/gv0XmbJt6WTU5UGUTCJHVezoxin2.json"
    );
    const blogs = await res.json();
    setBlogs(blogs);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { blogs };
};

export default useFetchData;
