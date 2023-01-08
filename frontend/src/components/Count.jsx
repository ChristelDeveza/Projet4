/* eslint-disable react/prop-types */
import React from "react";

function Count({ adherentCount }) {
  const numberAdherent = adherentCount.map((element) => element).length;
  const numberNewAdherent = adherentCount.filter(
    (element) => element.Is_Abonnement === 0
  ).length;
  const numberAdherentAbonnement1 = adherentCount.filter(
    (element) => element.Is_Abonnement === 1
  ).length;
  const numberAdherentAbonnement2 = adherentCount.filter(
    (element) => element.Is_Abonnement === 2
  ).length;
  const numberAdherentAbonnement3 = adherentCount.filter(
    (element) => element.Is_Abonnement === 3
  ).length;

  return (
    <div className="count-box">
      <h3>Souscriptions</h3>
      <h4>Nombre d'adhérents</h4>
      <p className="countNumber">{numberAdherent}</p>
      <br />
      <h4>Nouveaux adhérents - En cours de souscription</h4>
      <p className="countNumber">{numberNewAdherent}</p>
      <h4>Nombre d'adhérents par abonnement souscrit</h4>
      <h5>Abonnement 1 - Cheap</h5>
      <p className="countNumber">{numberAdherentAbonnement1}</p>
      <h5>Abonnement 2 - Fit</h5>
      <p className="countNumber">{numberAdherentAbonnement2}</p>
      <h5>Abonnement 3 - Gold</h5>
      <p className="countNumber">{numberAdherentAbonnement3}</p>
    </div>
  );
}

export default Count;
