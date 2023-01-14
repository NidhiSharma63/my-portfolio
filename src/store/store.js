import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "store/blogSlice";

const store = configureStore({
  reducer: {
    blog: blogSlice,
  },
});

export default store;
