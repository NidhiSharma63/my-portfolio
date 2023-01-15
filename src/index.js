import React from "react";
import ReactDOM from "react-dom/client";
import BlogsPage from "pages/BlogsPage";
import HomePage from "pages/HomePage";
import "./assets/css/main.css";
import Login from "./components/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import APP_ENDPOINTS from "./constant/App_And_Point";
import MarkDown from "./components/Markdown/Markdown";
import Errorpage from "./components/Notfound/Errorpage";
import { ToastContainer } from "react-toastify";
import Blog from "components/blogs/Blog";
import { Provider } from "react-redux";
import store from "store/store";
import { mytheme } from "theme";
import { ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: APP_ENDPOINTS.ROOT,
    element: (
      <ThemeProvider theme={mytheme}>
        <HomePage />
      </ThemeProvider>
    ),
  },
  {
    path: APP_ENDPOINTS.LOGIN,
    element: (
      <ThemeProvider theme={mytheme}>
        {" "}
        <ToastContainer />
        <Login />
      </ThemeProvider>
    ),
  },
  {
    path: APP_ENDPOINTS.ADMIN,
    element:
      localStorage.getItem("user") === "admin" ? (
        <ThemeProvider theme={mytheme}>
          <MarkDown />
          <ToastContainer />
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={mytheme}>
          {" "}
          <ToastContainer />
          <Login />
        </ThemeProvider>
      ),
  },
  {
    path: APP_ENDPOINTS.Blogs,
    element: (
      <Provider store={store}>
        <ThemeProvider theme={mytheme}>
          <BlogsPage />
        </ThemeProvider>
      </Provider>
    ),
  },
  {
    path: "blog/:blog",
    element: (
      <Provider store={store}>
        <ThemeProvider theme={mytheme}>
          <Blog />
        </ThemeProvider>
      </Provider>
    ),
  },
  {
    path: "*",
    element: <Errorpage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
