import HomePage from "pages/HomePage";
import React from "react";
import ReactDOM from "react-dom/client";
import {HelmetProvider} from "react-helmet-async";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "store/store";
import "./assets/css/main.css";
import Errorpage from "./components/Notfound/Errorpage";
import APP_ENDPOINTS from "./constant/App_And_Point";

// Check if your app is being displayed in an iframe
if (window !== window.top) {
  // If it's in an iframe, redirect to your app's URL
  window.top.location.href = window.location.href;
} else {
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
}
