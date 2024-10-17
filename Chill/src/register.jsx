import React from "react";
import ReactDOM from "react-dom/client";
/*import App from './App.jsx'*/
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Card2 from "./components/card2";

export default function Register() {
  return (
    <>
      <div className="registerForm">
        <Card2 />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  </React.StrictMode>
);
