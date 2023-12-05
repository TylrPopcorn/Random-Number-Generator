/**
 * npm install parcel-bundler
 * npm install react
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

//functions:
import App from "./Components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>NUMBER GENERATOR</h1>
    <App />
  </React.StrictMode>
);
