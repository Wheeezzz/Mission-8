import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import webLogo from "./images/logo.png";
import googleButton from "./images/google-button.png";
import "../App.css";

function Card() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function loginHandler(e){
    e.preventDefault()
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("../homepage.html")
        navigate(0)
    } catch (error) {
        console.log(error);
    }
}
  return (
      <section>
      <div className="card">
        <form onSubmit={loginHandler} method="POST">
        <img src={webLogo} alt="Web Logo" className="logo" />
        <h1>Masuk</h1>
        <h2>Selamat datang kembali!</h2>
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
          <p>
            Belum punya akun? <a href="../register.html">Daftar</a>
          </p>
          <a href="">Lupa kata sandi?</a>
          <p></p>
          <button type="submit">Masuk</button>
          <p>Atau</p>
          <button>
            <img src={googleButton} alt="googleButton" className="googleButton" />
            &nbsp;Masuk dengan Google
          </button>
        </table>
        </form>
      </div>
      </section>
  );
}

export default Card;
