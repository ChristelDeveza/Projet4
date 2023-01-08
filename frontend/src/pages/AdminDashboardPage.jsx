/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Filter from "../components/Filter";
import SearchAdmin from "../components/SearchAdmin";
import Count from "../components/Count";
import CardAdherentList from "../components/CardAdherentList";
import "../CSS/AdminDashboardPage.css";
import muscu from "../assets/muscu.jpg";
import { UserContext } from "../context/UserContext";

function AdminDashboardPage() {
  const { setIsOnline } = useContext(UserContext);
  const [adherentList, setAdherentList] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [adherentCount, setAdherentCount] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/admin`,

        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setAdherentList(response.data);
        setAdherentCount(response.data);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/search/admin?searchValue=${searchValue}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setAdherentList(response.data);
      });
  };

  function backToList() {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/admin`,

        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setAdherentList(response.data);
      });
  }

  function getNewAdherentList() {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/admin`,

        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setAdherentList(
          response.data.filter((element) => element.Is_Abonnement === 0)
        );
      });
  }

  // filter abonnement search admin
  const abonnement = [1, 2, 3];

  const [checkedAbonnement, setCheckedAbonnement] = useState(
    new Array(abonnement.length).fill(false)
  );

  let updateDatas = [...adherentList];

  function handleFilter() {
    // if one Abonnement checked only
    if (checkedAbonnement[0] || checkedAbonnement[1] || checkedAbonnement[2]) {
      updateDatas = adherentList.filter((data) => {
        // console.log(
        //   "Abonnement ValueOf",
        //   abonnement[0].valueOf(),
        //   "Is_Abonnement",
        //   data.Is_Abonnement
        // );
        return (
          (data.Is_Abonnement === abonnement[0].valueOf() &&
            checkedAbonnement[0]) ||
          (data.Is_Abonnement === abonnement[1].valueOf() &&
            checkedAbonnement[1]) ||
          (data.Is_Abonnement === abonnement[2].valueOf() &&
            checkedAbonnement[2])
        );
      });
    }
    // if Abonnement1 et Abonnement2 checked
    if (checkedAbonnement[0] && checkedAbonnement[1]) {
      updateDatas = adherentList.filter((data) => {
        return (
          (data.Is_Abonnement === abonnement[0].valueOf() &&
            checkedAbonnement[0]) ||
          (data.Is_Abonnement === abonnement[1].valueOf() &&
            checkedAbonnement[1])
        );
      });
    }

    // if Abonnement1 et Abonnement3 checked
    if (checkedAbonnement[0] && checkedAbonnement[2]) {
      updateDatas = adherentList.filter((data) => {
        return (
          (data.Is_Abonnement === abonnement[0].valueOf() &&
            checkedAbonnement[0]) ||
          (data.Is_Abonnement === abonnement[2].valueOf() &&
            checkedAbonnement[2])
        );
      });
    }

    // if Abonnement1, Abonnement2 et Abonnement3 checked
    if (checkedAbonnement[0] && checkedAbonnement[2] && checkedAbonnement[2]) {
      updateDatas = adherentList.filter((data) => {
        return (
          (data.Is_Abonnement === abonnement[0].valueOf() &&
            checkedAbonnement[0]) ||
          (data.Is_Abonnement === abonnement[1].valueOf() &&
            checkedAbonnement[1]) ||
          (data.Is_Abonnement === abonnement[2].valueOf() &&
            checkedAbonnement[2])
        );
      });
    }
    return updateDatas;
  }

  const filterAbonnementArray = (position) => {
    const updatedCheckedAbonnement = checkedAbonnement.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedAbonnement(updatedCheckedAbonnement);
    handleFilter(updatedCheckedAbonnement);
  };

  handleFilter();

  // Delete a member
  function deleteCardAdherent(id) {
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
        ).then(() => window.location.reload());
      }
    });
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
        Swal.fire("Vous êtes déconnecté");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.error(err);
        }
      });
  }

  return (
    <div className="adminDashboard">
      <img className="img-dashboard-page" src={muscu} alt="muscu" />
      <div className="header-dashboard-page">
        <h2>TABLEAU DE BORD</h2>
      </div>

      <div className="dashboard-container">
        <div className="box-division list">
          <div className="box-filter">
            <div className="searchBar-box">
              <SearchAdmin
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              <div className="box-btn">
                <button
                  className="btn-dashboard search"
                  type="button"
                  onClick={handleSubmit}
                >
                  RECHERCHER
                </button>
                <button
                  className="btn-dashboard all"
                  type="button"
                  onClick={backToList}
                >
                  TOUS
                </button>
                <button
                  className="btn-dashboard new"
                  type="button"
                  onClick={getNewAdherentList}
                >
                  NOUVEAUX
                </button>
                <button className="btn-dashboard create" type="button">
                  CREER
                </button>
                <button
                  className="disconnect-button"
                  type="button"
                  onClick={logout}
                >
                  SE DECONNECTER
                </button>
              </div>
            </div>

            <Filter
              abonnement={abonnement}
              checkedAbonnement={checkedAbonnement}
              filterAbonnementArray={filterAbonnementArray}
            />
          </div>
          <CardAdherentList
            updateDatas={updateDatas}
            deleteCardAdherent={deleteCardAdherent}
          />
        </div>
        <div className="box-division count">
          <Count adherentCount={adherentCount} />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
