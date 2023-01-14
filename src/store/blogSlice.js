import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    selectBlog: (state, action) => {
      state.blog.push(action.payload);
    },
  },
});

export const { selectBlog } = blogSlice.actions;
export default blogSlice.reducer;
// exporting the config data object for consumption by page(s)
export const blogDataInStore = (state) => state.blog.blog;
