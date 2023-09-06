import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/UserProfileAdmin.css";
import Swal from "sweetalert2";

function UserProfileAdmin() {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState([]);
  const {
    Firstname,
    Lastname,
    Address,
    Email,
    abName,
    Price,
    prName,
    description,
  } = userProfile;
  const navigate = useNavigate();

  // Display all members
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/admin/userProfile/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setUserProfile(response.data);
      });
  }, []);

  // Delete a member
  function deletAdherentProfile() {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir supprimer ce membre ?",
      text: "Cette action est irréversible !",
      icon: "warning",
      position: "center",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler!",
      confirmButtonText: "Oui, supprimer!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/members/${id}`, {
            withCredentials: true,
          })
          .catch((error) => {
            console.error(error);
            Swal.fire("Erreur lors de la suppression du membre.");
          });
        Swal.fire(
          "Supprimé !",
          "Le membre a bien été supprimé.",
          "success"
        ).then(() => navigate("/MonCompte", { replace: true }));
      }
    });
  }

  return (
    <div className="user-profile-box">
      <h1 className="title-user-profile">Profil adhérent</h1>

      <form className="form-user-profile-admin" action="">
        <div className="input-box">
          <label className="label-input" htmlFor="nom">
            Nom
          </label>
          <input
            className="data-input"
            type="text"
            name="nom"
            id=""
            value={Lastname}
          />
        </div>
        <div className="input-box">
          <label className="label-input" htmlFor="prénom">
            Prénom
          </label>
          <input
            className="data-input"
            type="text"
            name="prénom"
            id=""
            value={Firstname}
          />
        </div>
        <div className="input-box">
          <label className="label-input" htmlFor="adresse">
            Adresse
          </label>
          <input
            className="data-input"
            type="text"
            name="adresse"
            id=""
            value={Address}
          />
        </div>
        <div className="input-box">
          <label className="label-input" htmlFor="email">
            Email
          </label>
          <input
            className="data-input"
            type="text"
            name="email"
            id=""
            value={Email}
          />
        </div>
        <div className="input-box">
          <label className="label-input" htmlFor="abonnement">
            Abonnement souscrit
          </label>
          <input
            className="data-input"
            type="text"
            name="abonnement"
            id=""
            value={abName}
          />
        </div>
        <div className="input-box">
          <label className="label-input" htmlFor="prix">
            Abonnement prix
          </label>
          <input
            className="data-input"
            type="text"
            name="abonnement"
            id=""
            value={Price}
          />
        </div>
        <div className="input-box">
          <label className="label-input" htmlFor="programme">
            Nom du programme suivi
          </label>
          <input
            className="data-input"
            type="text"
            name="programme"
            id=""
            value={prName}
          />
        </div>
        <div className="input-box">
          <p className="label-input">Détail du programme suivi : </p>
          <p id="input-box">{description}</p>
        </div>
        <button
          type="button"
          className="deleteBtn-list-profile"
          onClick={() => {
            deletAdherentProfile();
          }}
        >
          Supprimer
        </button>
      </form>
    </div>
  );
}

export default UserProfileAdmin;
