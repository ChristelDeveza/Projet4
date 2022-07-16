import React from "react";
import { Link } from "react-router-dom";
import "../CSS/ButtonInscription.css";

function ButtonInscription() {
  return (
    <div>
      {" "}
      <button className="btnH" type="button">
        <Link to="MonCompte" className="text-decoration">
          M'INSCRIRE
        </Link>
      </button>
    </div>
  );
}

export default ButtonInscription;
