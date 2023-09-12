import React from "react";
import ReactDOM from "react-dom/client";
import BlogsPage from "pages/BlogsPage";
import HomePage from "pages/HomePage";
import "./assets/css/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import APP_ENDPOINTS from "./constant/App_And_Point";
import MarkDown from "./components/Markdown/Markdown";
import Errorpage from "./components/Notfound/Errorpage";
import Blog from "components/blogs/Blog";
import { Provider } from "react-redux";
import store from "store/store";
import { getValueFromLS } from "utlis/Localstorage";
import { Helmet, HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: APP_ENDPOINTS.My_PORTFOLIO || APP_ENDPOINTS.ROOT,
    element: (
      <Provider store={store}>
        <HomePage />
      </Provider>
    ),
  },
  {
    path: APP_ENDPOINTS.ROOT,
    element: (
      <Provider store={store}>
        <HomePage />
      </Provider>
    ),
  },

  {
    path: "*",
    element: <Errorpage />,
  },
]);

root.render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
