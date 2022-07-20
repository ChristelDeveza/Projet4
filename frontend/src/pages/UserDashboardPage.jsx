/* eslint-disable no-shadow */
import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderAccountUser from "../components/HeaderAccountUser";
import "../CSS/UserDashboardPage.css";

function UserDashboardPage() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const id = 1;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/userdatas/${id}`)
      .then((response) => {
        const {
          Name: lastname,
          Firstname: firstname,
          Address: address,
          Email: email,
        } = response.data;
        setLastname(lastname);
        setFirstname(firstname);
        setAddress(address);
        setEmail(email);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/userdatas/${id}`, {
        Name: lastname,
        Firstname: firstname,
        Address: address,
        Email: email,
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="user-dashboard">
      <div className="photo-home">
        <h1 className="title-user-dashboard">MON COMPTE</h1>
        <div>
          <HeaderAccountUser firstname={firstname} />
        </div>
      </div>

      <div className="user-datas-box">
        <div className="ec-box">
          <h2 className="box-entete">MES COORDONNEES</h2>
          <form onSubmit={handleSubmit} className="user-datas">
            <div>
              <div>
                <label className="label-input" htmlFor="name">
                  Nom :
                </label>
              </div>
              <input
                className="data-input"
                type="text"
                id="Name"
                autoComplete="off"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                required
              />
              <div>
                <label className="label-input" htmlFor="firstname">
                  Prénom :
                </label>
              </div>
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
            <div>
              <label className="label-input" htmlFor="address">
                Adresse :
              </label>
            </div>
            <input
              className="data-input"
              type="text"
              id="address"
              autoComplete="off"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
            />
            <div>
              <label className="label-input" htmlFor="email">
                E-mail :
              </label>
            </div>
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
              <div className="btn-update">
                <button
                  className="update-button"
                  type="button"
                  onClick={handleSubmit}
                >
                  MODIFIER
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="subs-user-box">
          <h2 className="box-entete">MON ABONNEMENT</h2>
        </div>
        <div className="prog-user-box">
          <h2 className="box-entete">MES PROGRAMMES</h2>
          <label className="prog-select" htmlFor="programme-select">
            Choisissez un programme:
          </label>

          <select name="pets" id="pet-select">
            <option value="">--Choisir--</option>
            <option value="Musculation">Musculation</option>
            <option value="Cardio-training">Cardio-training</option>
            <option value="Ligne">Ligne</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardPage;
