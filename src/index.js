import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const myStyle = {
//   color: "red",
//   backgroundColor: "blue",
// };
const title = <h1>G12 Intro React</h1>;
root.render(<React.StrictMode>{title}</React.StrictMode>);
