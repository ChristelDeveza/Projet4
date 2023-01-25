/* eslint-disable react/prop-types */
import React from "react";
import ButtonInscription from "./ButtonInscription";
import "../CSS/CardSubscription.css";

function CardSubscription(props) {
  const { title, price, advantages } = props;
  return (
    <div className="box-cardsubscription">
      <div>
        <h3>{title}</h3>
        <h4>Prix : {price}</h4>
        {advantages}
      </div>
      <div className="button-insc">
        <ButtonInscription />
      </div>
    </div>
  );
}

export default CardSubscription;
