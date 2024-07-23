import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Router from "./Router/Router.jsx";
// import { RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
