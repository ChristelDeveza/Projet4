/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../CSS/Register.css";

function Register() {
  // state which concerns form field values
  const [values, setValues] = useState({
    lastname: "",
    firstname: "",
    address: "",
    email: "",
    password: "",
  });

  const [focus, setFocus] = useState(false);

  // focus on a field
  function handleFocus() {
    setFocus(true);
  }

  // array which gathers all form inputs
  const inputsArray = [
    {
      id: 1,
      name: "lastname",
      type: "text",
      placeholder: "Nom",
      errorMessage:
        "Ce champ est obligatoire et doit contenir entre 3 et 16 caractères (lettres)",
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
        "Ce champ est obligatoire et doit contenir entre 3 et 16 caractères (lettres)",
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
        "Ce champ est obligatoire et doit contenir entre 3 et 36 caractères (chiffres-lettres)",
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
        "Ce champ est obligatoire et doit être conforme au format e-mail",
      label: "E-mail",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Mot de passe",
      errorMessage:
        "Ce champ est obligatoire et doit contenir entre 8 et 20 caractères, dont lettres, chiffres et caractères spéciaux",
      label: "Mot de passe",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%^&*])[a-zA-Z0-9!@#%^&*]{8,20}$`,
      required: true,
    },
  ];
  const navigate = useNavigate();

  // Submit form into database
  function handleSubmit(e) {
    e.preventDefault();
    // check if all inputs are filed
    if (
      !values.lastname ||
      !values.firstname ||
      !values.address ||
      !values.email ||
      !values.password
    ) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez renseigner tous les champs du formulaire",
      });
      return;
    }

    // check if all inputs are conform with pattern
    if (
      values.lastname.match(inputsArray[0].pattern) === null ||
      values.firstname.match(inputsArray[1].pattern) === null ||
      values.address.match(inputsArray[2].pattern) === null ||
      values.email.match(inputsArray[3].pattern) === null ||
      values.password.match(inputsArray[4].pattern) === null
    ) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Les champs du formulaire sont incorrectement renseignés, merci de modifier",
      });
      return;
    }
    // post data into database
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
        Name: values.lastname,
        Firstname: values.firstname,
        Address: values.address,
        Email: values.email,
        Password: values.password,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Confirmation",
          text: "Votre compte a bien été enregistré. Pour accéder à votre compte, merci de vous connecter.",
        });
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
        <div className="input-form">
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
        </div>
      </form>
    </div>
  );
}

export default Register;
