/* eslint-disable no-shadow */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { GoFlame } from "react-icons/go";
import { BiRun } from "react-icons/bi";
import { UserContext } from "../context/UserContext";
import HeaderAccountUser from "../components/HeaderAccountUser";
import "../CSS/UserDashboardPage.css";

function UserDashboardPage() {
  const { isOnline, setIsOnline } = useContext(UserContext);
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [subscription, setSubscription] = useState([]);
  const [programme, setProgramme] = useState();
  const [programmeById, setProgrammeById] = useState();
  const navigate = useNavigate();
  const { id } = isOnline;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/userdatas`, {
        withCredentials: true,
      })
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

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/usersubscription/${id}`)
      .then((response) => {
        setSubscription(response.data);
      })
      .catch((error) => console.error(error));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/programme`)
      .then((response) => {
        setProgramme(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/userdatas`,
        {
          id,
          Name: lastname,
          Firstname: firstname,
          Address: address,
          Email: email,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        Swal.fire("Vos donn??es personnelles ont bien ??t?? modifi??es.");
      })
      .catch((error) => console.error(error));
  }

  function searchProgramm(e) {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/programme/${e.target.value}`)
      .then((response) => {
        setProgrammeById(response.data);
      })
      .catch((error) => console.error(error));
  }

  function logout() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/MonCompte", { replace: true });
        setIsOnline(null);
        localStorage.setItem("user", null);
      })
      .then(() => {
        Swal.fire("Vous ??tes d??connect??");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.error(err);
        }
      });
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
                  Pr??nom :
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
              <div className="btn-disconnect">
                <button
                  className="disconnect-button"
                  type="button"
                  onClick={logout}
                >
                  SE DECONNECTER
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="subs-user-box">
          <div>
            <h2 className="box-entete">MON ABONNEMENT</h2>

            {subscription ? (
              <div className="subs-text-box">
                <h3 className="entete-subs">
                  {subscription.firstname} tu trouveras ci-apr??s les conditions
                  et le d??tail de ton abonnement :
                </h3>
                <div className="subs-name">
                  <h4>
                    {" "}
                    <BiRun />
                    {subscription.Name}
                  </h4>
                </div>
                <div className="subs-price">
                  <h4>
                    <GoFlame className="icon-flame" />
                    Prix de l'abonnement : {subscription.Price},99 ??? pendant 6
                    mois, puis 23,99 ??? les 6 autres mois
                  </h4>
                </div>
                <div>
                  <div className="subs-detail">
                    D??tail : <br />
                  </div>
                  <br />
                  {subscription.Description}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="prog-user-box">
          <h2 className="box-entete">MES PROGRAMMES</h2>
          <label className="prog-select" htmlFor="programme-select">
            Choisissez un programme:
          </label>

          <select onChange={(e) => searchProgramm(e)}>
            {programme &&
              programme.map((element) => {
                return (
                  <option key={element.id} value={element.id}>
                    {element.Name}
                  </option>
                );
              })}
          </select>
          {programmeById ? (
            <div>
              <h3>{programmeById.Name}</h3>
              <p>{programmeById.Description}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default UserDashboardPage;
