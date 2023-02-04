import { createSlice } from "@reduxjs/toolkit";
import { setValueToLS } from "utlis/Localstorage";

const initialState = {
  // selectBlog: [],
  editBlogUuid: "",
  editblog: {},
  isEdit: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    // selectBlog: (state, action) => {
    //   state.selectBlog.push(action.payload);
    // },
    // deSelectBlog: (state, action) => {
    //   state.selectBlog.splice(0, state.selectBlog.length);
    // },
    setEditBlogUuid: (state, action) => {
      state.editBlogUuid = action.payload;
    },
    setEditblog: (state, action) => {
      state.editblog = action.payload;
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
  },
});

export const {
  selectBlog,
  deSelectBlog,
  setEditBlogUuid,
  setEditblog,
  setIsEdit,
} = blogSlice.actions;
export default blogSlice.reducer;
// exporting the config data object for consumption by page(s)
export const blogDataInStore = (state) => state.blog;
