import React from "react";
import "../CSS/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="navbar-menu">
        <li>Accueil</li>
        <li>Abonnements</li>
        <li>Activités</li>
        <li>A propos</li>
        <li>Témoignages</li>
      </ul>
    </div>
  );
}

export default Navbar;
