import React from "react";
import { Link } from "react-router-dom";
import "../CSS/ButtonInscription.css";

function ButtonInscription(props) {
  // eslint-disable-next-line react/prop-types
  const { path } = props;
  return (
    <div>
      {" "}
      <Link to={path} className="text-decoration">
        <button className="btnH" type="button">
          M'INSCRIRE
        </button>
      </Link>
    </div>
  );
}

export default ButtonInscription;
