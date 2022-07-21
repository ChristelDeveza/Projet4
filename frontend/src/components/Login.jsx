import React, { useState } from "react";
import axios from "axios";
import "../CSS/Login.css";

function Login() {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (user && password) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/login`,
          {
            email: user,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => res.data)
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <div className="login">
      <section>
        <h1 className="title-login">SE CONNECTER</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">E-mail :</label>
          <input
            className="login-input"
            type="text"
            id="email"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor="password">Mot de passe :</label>
          <input
            className="login-input"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button className="login-button" type="button" onClick={handleSubmit}>
            SE CONNECTER
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
