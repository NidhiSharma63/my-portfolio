import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/css/main.css";
import Login from "./components/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import APP_ENDPOINTS from "./constant/App_And_Point";
import { Admin } from "./components/Admin";
const router = createBrowserRouter([
  {
    path: APP_ENDPOINTS.ROOT,
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: localStorage.getItem("user") === "admin" ? <Admin /> : <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
