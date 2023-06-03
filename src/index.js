import React from "react";
import * as ReactDOM from "react-dom/client";
import {
    RouterProvider,
  } from "react-router-dom";
import router from "./router"

const domNode = document.getElementById('root');

  ReactDOM.createRoot(domNode).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );