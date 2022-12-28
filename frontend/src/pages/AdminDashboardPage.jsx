import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboardPage() {
  const [adherentList, setAdherentList] = useState([]);

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
  return (
    <div>
      <h1>Tableau de bord</h1>
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
