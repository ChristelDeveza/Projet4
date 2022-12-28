import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchAdmin from "../components/SearchAdmin";
import Count from "../components/Count";

function AdminDashboardPage() {
  const [adherentList, setAdherentList] = useState([]);
  const [searchValue, setSearchValue] = useState();

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

  return (
    <div>
      <h1>Tableau de bord</h1>
      <div>
        <SearchAdmin
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <button type="button" onClick={handleSubmit}>
          Rechercher
        </button>
        <button type="button" onClick={backToList}>
          Back to list
        </button>
        <button type="button" onClick={getNewAdherentList}>
          Nouveaux adhérents
        </button>
      </div>
      <div>
        {adherentList.map((adherent) => (
          <div>
            <p>
              {adherent.Name}
              {adherent.Firstname}
              {adherent.Address}
              {adherent.Email}
              {adherent.Is_Abonnement}
            </p>
          </div>
        ))}
      </div>

      <Count adherentList={adherentList} />
    </div>
  );
}

export default AdminDashboardPage;
