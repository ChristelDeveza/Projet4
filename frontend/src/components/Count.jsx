/* eslint-disable react/prop-types */
import React from "react";

function Count({ adherentList }) {
  const numberAdherent = adherentList.map((element) => element).length;
  const numberNewAdherent = adherentList.filter(
    (element) => element.Is_Abonnement === 0
  ).length;
  const numberAdherentAbonnement1 = adherentList.filter(
    (element) => element.Is_Abonnement === 1
  ).length;
  const numberAdherentAbonnement2 = adherentList.filter(
    (element) => element.Is_Abonnement === 2
  ).length;
  const numberAdherentAbonnement3 = adherentList.filter(
    (element) => element.Is_Abonnement === 3
  ).length;

  return (
    <div>
      <h3>Souscriptions</h3>
      <h4>Nombre d'adhérents</h4>
      {numberAdherent}
      <br />
      <h4>Nouveaux adhérents - En cours de souscription</h4>
      {numberNewAdherent}
      <h4>Nombre d'adhérents par abonnement souscrit</h4>
      <h5>Abonnement 1</h5>
      {numberAdherentAbonnement1}
      <h5>Abonnement 2</h5>
      {numberAdherentAbonnement2}
      <h5>Abonnement 3</h5>
      {numberAdherentAbonnement3}
    </div>
  );
}

export default Count;
