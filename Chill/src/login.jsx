import React from "react";
import ReactDOM from "react-dom/client";
/*import App from './App.jsx'*/
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Card from "./components/card";

export default function Login() {
  return (
    <>
      <div className="loginForm">
        <Card />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </React.StrictMode>
);
