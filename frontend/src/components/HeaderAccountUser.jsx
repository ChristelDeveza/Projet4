import React from "react";
import "../CSS/HeaderAccountUser.css";

// eslint-disable-next-line react/prop-types
function HeaderAccountUser({ firstname }) {
  return (
    <div>
      <h1 className="header-user">Bienvenue {firstname}</h1>
    </div>
  );
}

export default HeaderAccountUser;
