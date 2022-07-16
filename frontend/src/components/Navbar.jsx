import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import ButtonMyAccount from "./ButtonMyAccount";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <div className="button-container">
            <button
              className={sidebar ? "hamburger open" : "hamburger"}
              type="button"
              aria-label="Toggle nav"
              aria-expanded="false"
              onClick={showSidebar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={!sidebar ? "nav-container" : "nav-container open"}>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="Abonnements">Abonnements</Link>
            </li>
            <li>
              <Link to="Activites">Activités</Link>
            </li>
            <li>
              <Link to="APropos">A propos</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
            <li>
              <Link to="MonCompte">
                <ButtonMyAccount />
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
