import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import HomePage from "pages/HomePage";
import "./assets/css/main.css";
import Login from "./components/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import APP_ENDPOINTS from "./constant/App_And_Point";
import MarkDown from "./components/Markdown/Markdown";
import Errorpage from "./components/Notfound/Errorpage";

const router = createBrowserRouter([
  {
    path: APP_ENDPOINTS.ROOT,
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element:
      localStorage.getItem("user") === "admin" ? <MarkDown /> : <Login />,
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
