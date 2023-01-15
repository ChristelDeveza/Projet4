/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import "../CSS/Register.css";

function Register() {
  // const [lastname, setLastname] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [address, setAddress] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [values, setValues] = useState({
    lastname: "",
    firstname: "",
    address: "",
    email: "",
    password: "",
  });

  const [focus, setFocus] = useState(false);

  function handleFocus() {
    setFocus(true);
  }

  const inputsArray = [
    {
      id: 1,
      name: "lastname",
      type: "text",
      placeholder: "Nom",
      errorMessage:
        "Ce champs est obligatoire et doit contenir entre 3 et 16 caractères (lettres)",
      label: "Nom",
      pattern: "^[A-zÀ-ù]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "firstname",
      type: "text",
      placeholder: "Prénom",
      errorMessage:
        "Ce champs est obligatoire et doit contenir entre 3 et 16 caractères (lettres)",
      label: "Prénom",
      pattern: "^[A-zÀ-ù]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "address",
      type: "text",
      placeholder: "Adresse",
      errorMessage:
        "Ce champs est obligatoire et doit contenir entre 3 et 36 caractères (chiffres-lettres)",
      label: "Adresse",
      pattern: "^[A-zÀ-ù0-9_ ]{3,36}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      errorMessage:
        "Ce champs est obligatoire et doit être conforme au format e-mail",
      label: "E-mail",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Mot de passe",
      errorMessage:
        "Ce champs est obligatoire et doit contenir entre 8 et 20 caractères, dont lettres, chiffres et caractères spéciaux",
      label: "Mot de passe",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%^&*])[a-zA-Z0-9!@#%^&*]{8,20}$`,
      required: true,
    },
  ];
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !values.lastname ||
      !values.firstname ||
      !values.address ||
      !values.email ||
      !values.password
    ) {
      Swal.fire("Afin de vous inscrire, merci de compléter tous les champs");
      return;
    }

    if (
      values.lastname.match(inputsArray[0].pattern) === null ||
      values.firstname.match(inputsArray[1].pattern) === null ||
      values.address.match(inputsArray[2].pattern) === null ||
      values.email.match(inputsArray[3].pattern) === null ||
      values.password.match(inputsArray[4].pattern) === null
    ) {
      Swal.fire("Champ incorrect, merci de modifier");
      return;
    }
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
        Name: values.lastname,
        Firstname: values.firstname,
        Address: values.address,
        Email: values.email,
        Password: values.password,
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
        {inputsArray.map((input) => (
          <div key={input.id}>
            <label htmlFor="name" className="label-register">
              {" "}
              {input.label}
            </label>
            <input
              className="register-input"
              {...input}
              value={values[input.name]}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              required={input.required}
              onBlur={handleFocus}
              focus={focus.toString()}
            />
            <span className="errorMsg">{input.errorMessage}</span>
          </div>
        ))}
        <button
          className="register-button"
          type="button"
          onClick={handleSubmit}
        >
          ENREGISTRER
        </button>
      </form>
      {/* <form onSubmit={handleSubmit} className="register-form">
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
      </form> */}
    </div>
  );
}

export default Register;
