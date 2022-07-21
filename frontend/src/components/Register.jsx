import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../CSS/Register.css";

function Register() {
  const { setIsOnline } = useContext(UserContext);
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
        Name: lastname,
        Firstname: firstname,
        Address: address,
        Email: email,
        Password: password,
      })
      .then((res) => {
        setIsOnline(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .then(() => {
        Swal.fire(
          "Votre compte a bien été enregistré. Pour accéder à votre compte, merci de vous connecter."
        );
      })
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="register">
      <h1 className="title-register">CREER UN COMPTE</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="name">Nom :</label>
        <input
          className="register-input"
          type="text"
          id="Name"
          autoComplete="off"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          required
        />
        <label htmlFor="firstname">Prénom :</label>
        <input
          className="register-input"
          type="text"
          id="Firstname"
          autoComplete="off"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          required
        />
        <label htmlFor="address">Adresse :</label>
        <input
          className="register-input"
          type="text"
          id="address"
          autoComplete="off"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required
        />
        <label htmlFor="email">E-mail :</label>
        <input
          className="register-input"
          type="text"
          id="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="password">Mot de passe :</label>
        <input
          className="register-input"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button
          className="register-button"
          type="button"
          onClick={handleSubmit}
        >
          ENREGISTRER
        </button>
      </form>
    </div>
  );
}

export default Register;
