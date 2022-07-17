import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import "../CSS/Login.css";
import "../CSS/UserPageLogin.css";

function UserLoginPage() {
  const [loginChoice, setLoginChoice] = useState(false);

  function showLogin() {
    setLoginChoice(!loginChoice);
  }

  return (
    <div className="loginpage">
      <button
        className="show-register-button"
        type="button"
        onClick={showLogin}
      >
        {!loginChoice ? "CREER UN COMPTE" : "ME CONNECTER"}
      </button>
      {!loginChoice ? <Login /> : <Register />}
    </div>
  );
}

export default UserLoginPage;
