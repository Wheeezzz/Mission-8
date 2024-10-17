import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import webLogo from "./images/logo.png";
import googleButton from "./images/google-button.png";
import "../App.css";

function Card2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function registerHandler(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("../login.html");
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="card">
      <form onSubmit={registerHandler} method="POST">
        <img src={webLogo} alt="Web Logo" className="logo" />
        <h1>Daftar</h1>
        <h2>Selamat datang!</h2>
        <table className="input-block">
          <tr>
            <label>Username:</label>
            <input
              type="email"
              name="username"
              id="username"
              placeholder="Masukkan Username"
              className="usernameColumn"
              onChange={(e) => setEmail(e.target.value)}
            />
          </tr>
          <tr className="password">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="passwordColumn"
              onChange={(e) => setPassword(e.target.value)}
            />
          </tr>
          <tr className="password">
            <label>Konfirmasi Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="passwordColumn"
            />
          </tr>
          <p>
            Sudah punya akun? <a href="../login.html">Masuk</a>
          </p>
          <p></p>
          <button type="submit">Daftar</button>
          <p>Atau</p>
          <button>
            <img
              src={googleButton}
              alt="googleButton"
              className="googleButton"
            />
            &nbsp;Daftar dengan Google
          </button>
        </table>
      </form>
    </div>
  );
}

export default Card2;
