import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchAdmin from "../components/SearchAdmin";

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
    </div>
  );
}

export default AdminDashboardPage;
