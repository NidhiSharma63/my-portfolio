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

const router = createBrowserRouter([
  {
    path: APP_ENDPOINTS.ROOT,
    element: <HomePage />,
  },
  {
    path: APP_ENDPOINTS.LOGIN,
    element: (
      <>
        {" "}
        <ToastContainer />
        <Login />
      </>
    ),
  },
  {
    path: APP_ENDPOINTS.ADMIN,
    element:
      localStorage.getItem("user") === "admin" ? (
        <>
          <MarkDown />
          <ToastContainer />
        </>
      ) : (
        <>
          {" "}
          <ToastContainer />
          <Login />
        </>
      ),
  },
  {
    path: APP_ENDPOINTS.Blogs,
    element: (
      <>
        <Provider store={store}>
          <BlogsPage />
        </Provider>
        <ToastContainer />
      </>
    ),
  },
  {
    path: "blog/:blog",
    element: (
      <Provider store={store}>
        <Blog />
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
