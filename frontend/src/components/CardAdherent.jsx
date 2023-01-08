/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from "react";

function CardAdherent(props) {
  const { Id, Name, Firstname, Address, Email, Is_Abonnement } = props;
  return (
    <div className="card">
      Adherent {Id} {Name} {Firstname} {Address} {Email} {Is_Abonnement}
    </div>
  );
}

export default CardAdherent;
