import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
    <Toaster />
  </React.StrictMode>
);
