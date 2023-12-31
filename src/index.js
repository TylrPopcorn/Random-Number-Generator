/**
 * npm install parcel-bundler
 * npm install react
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

//functions:
import App from "./Components/App";
//---------
//vars:
const TITLE = "NUMBER GENERATOR"; /*change title to whatever*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1 className="title" data-text={TITLE}>
      {TITLE}
    </h1>
    <h2> Generate a random number </h2>
    <App />
  </React.StrictMode>
);
