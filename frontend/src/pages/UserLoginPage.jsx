import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import "../CSS/Login.css";
import "../CSS/UserPageLogin.css";

function UserLoginPage() {
  const [loginChoice, setLoginChoice] = useState(false);

  // Interchange between login page and register page
  function showLogin() {
    setLoginChoice(!loginChoice);
  }

  return (
    <div className="loginpage" id={!loginChoice ? "loginpage" : "registerpage"}>
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
