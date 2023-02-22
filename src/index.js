import React from "react";
import ReactDOM from "react-dom/client";
import "../src/Style/index.css";
import App from "./Components/App.jsx";
import TodoProvider from "./Context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
