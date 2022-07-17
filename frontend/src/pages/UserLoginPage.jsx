import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css";

function UserLoginPage() {
  const userRef = useRef();
  const errorRef = useRef();
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLogged, setisLogged] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [user, password]);

  function handleSubmit(e) {
    e.preventDefault();
    setUser("");
    setPassword("");
    setisLogged(true);
  }

  return (
    <div className="login">
      {isLogged ? (
        <section>
          <h1>Vous êtes connecté</h1>
          <br />
          <p>Aller sur page utilisateur</p>
        </section>
      ) : (
        <section>
          <p
            ref={errorRef}
            className={errorMsg ? "errormsg" : "offscreen"}
            aria-live="assertive"
          >
            {errorMsg}
          </p>
          <h1 className="title-login">SE CONNECTER</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="email">E-mail :</label>
            <input
              className="login-input"
              type="text"
              id="email"
              ref={userRef}
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
            <button className="login-button" type="button">
              SE CONNECTER
            </button>
          </form>
          <p className="end-login-page">
            Pas encore de compte ?<br />
            <span className="new-account">
              <Link className="new-account-link" to="CreerUnCompte">
                Créer un compte
              </Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
}

export default UserLoginPage;
