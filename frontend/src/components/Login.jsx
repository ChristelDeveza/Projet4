import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../CSS/Login.css";

function Login() {
  const { setIsOnline } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

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
        .then((res) => {
          setIsOnline(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .then(() => {
          navigate("/MonCompteuser", { replace: true });
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Identifiant ou mot de passe invalide.",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez renseigner votre adresse e-mail ainsi que votre mot de passe.",
      });
    }
  }

  return (
    <div className="login">
      <section>
        <h1 className="title-login">SE CONNECTER</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-box">
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
          </div>

          <button className="login-button" type="button" onClick={handleSubmit}>
            SE CONNECTER
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
