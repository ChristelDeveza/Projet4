import React, { useState } from "react";
import "../CSS/UserDashboardPage.css";

function UserDashboardPage() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLastname("");
    setFirstname("");
    setAddress("");
    setEmail("");
  }

  return (
    <div className="user-dashboard">
      <h1 className="title-user-dashboard">MON COMPTE</h1>
      <div className="user-datas-box">
        <div className="ec-box">
          <h2 className="box-entete">MES COORDONNEES</h2>
          <form onSubmit={handleSubmit} className="user-datas">
            <div>
              <label htmlFor="name">Nom :</label>
              <input
                className="data-input"
                type="text"
                id="Name"
                autoComplete="off"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                required
              />

              <label htmlFor="firstname">Prénom :</label>
              <input
                className="data-input"
                type="text"
                id="Firstname"
                autoComplete="off"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                required
              />
            </div>
            <label htmlFor="address">Adresse :</label>
            <input
              className="data-input"
              type="text"
              id="address"
              autoComplete="off"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
            />
            <label htmlFor="email">E-mail :</label>
            <input
              className="data-input"
              type="text"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <div>
              <button
                className="update-button"
                type="button"
                onClick={handleSubmit}
              >
                MODIFIER
              </button>
            </div>
          </form>
        </div>
        <div className="subs-user-box">
          <h2 className="box-entete">MON ABONNEMENT</h2>
        </div>
        <div className="prog-user-box">
          <h2 className="box-entete">MES PROGRAMMES</h2>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardPage;
