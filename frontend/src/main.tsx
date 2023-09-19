import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.js";

alert("PLEASE wait like 3 minutes for the Contacts app to work properly, Render server for backend needs to warm up :)");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
