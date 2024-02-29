import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HomeCom from "./demo/Components/Home/Home.jsx";
import Layout from "./demo/Components/Layout/LayoutCmp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
);
