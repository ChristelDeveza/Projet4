import React, { useContext, useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { UserContext } from "../context/UserContext";
import "../CSS/Login.css";
import "../CSS/UserPageLogin.css";
import UserDashboardPage from "./UserDashboardPage";

function UserLoginPage() {
  const [loginChoice, setLoginChoice] = useState(false);
  const { isOnline } = useContext(UserContext);

  // Interchange between login page and register page
  function showLogin() {
    setLoginChoice(!loginChoice);
  }

  return (
    <div>
      {!isOnline ? (
        <div
          className="loginpage"
          id={!loginChoice ? "loginpage" : "registerpage"}
        >
          <button
            className="show-register-button"
            type="button"
            onClick={showLogin}
          >
            {!loginChoice ? "CREER UN COMPTE" : "ME CONNECTER"}
          </button>
          {!loginChoice ? <Login /> : <Register />}
        </div>
      ) : (
        <UserDashboardPage />
      )}
    </div>
  );
}

export default UserLoginPage;
