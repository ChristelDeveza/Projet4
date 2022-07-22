import React from "react";
import { Link } from "react-router-dom";
import "../CSS/ButtonInscription.css";

function ButtonInscription() {
  return (
    <div>
      {" "}
      <Link to="/Moncompte" className="text-decoration">
        <button className="btnH" type="button">
          M'INSCRIRE
        </button>
      </Link>
    </div>
  );
}

export default ButtonInscription;
