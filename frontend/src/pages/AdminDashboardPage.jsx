import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import SearchAdmin from "../components/SearchAdmin";
import Count from "../components/Count";
import CardAdherentList from "../components/CardAdherentList";

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

  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>Tableau de bord</h1>
      <div style={{ marginTop: "100px" }}>
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

      <Count adherentList={adherentList} />

      <Filter
        abonnement={abonnement}
        checkedAbonnement={checkedAbonnement}
        filterAbonnementArray={filterAbonnementArray}
      />

      <CardAdherentList updateDatas={updateDatas} />
    </div>
  );
}

export default AdminDashboardPage;
