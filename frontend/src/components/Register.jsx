import React, { useEffect, useRef, useState } from "react";
import "../CSS/Register.css";

function Register() {
  const userRef = useRef();
  // const errorRef = useRef();
  const [userLastname, setUserLastname] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  // const [errorMsg, setErrorMsg] = useState("");
  // const [isLogged, setisLogged] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setUserLastname("");
    setUserFirstname("");
    setUserAddress("");
    setUserEmail("");
    setPasswordRegister("");
    // setisLogged(true);
  }

  return (
    <div className="register">
      <section>
        {/* <p
          ref={errorRef}
          className={errorMsg ? "errormsg" : "offscreen"}
          aria-live="assertive"
        >
          {errorMsg}
        </p> */}

        <h1 className="title-register">CREER UN COMPTE</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="name">Nom :</label>
          <input
            className="register-input"
            type="text"
            id="Name"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUserLastname(e.target.value)}
            value={userLastname}
            required
          />
          <label htmlFor="firstname">Prénom :</label>
          <input
            className="register-input"
            type="text"
            id="Firstname"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUserFirstname(e.target.value)}
            value={userFirstname}
            required
          />
          <label htmlFor="address">Adresse :</label>
          <input
            className="register-input"
            type="text"
            id="address"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUserAddress(e.target.value)}
            value={userAddress}
            required
          />
          <label htmlFor="email">E-mail :</label>
          <input
            className="register-input"
            type="text"
            id="email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            required
          />
          <label htmlFor="password">Mot de passe :</label>
          <input
            className="register-input"
            type="password"
            id="password"
            onChange={(e) => setPasswordRegister(e.target.value)}
            value={passwordRegister}
            required
          />
          <button className="register-button" type="button">
            ENREGISTRER
          </button>
        </form>
      </section>
    </div>
  );
}

export default Register;
