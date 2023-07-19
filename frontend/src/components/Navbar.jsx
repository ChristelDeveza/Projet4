import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import ButtonMyAccount from "./ButtonMyAccount";
import logo from "../assets/Logo projet 4.png";

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
              <Link
                to="/"
                className="nav-icon"
                aria-label="visit homepage"
                aria-current="page"
              >
                <img className="logo-navbar" src={logo} alt="logo" />
              </Link>
            </li>

            <li className="lineHover">
              <Link to="/">Accueil</Link>
            </li>
            <li className="lineHover">
              <Link to="Abonnements">Abonnements</Link>
            </li>
            <li className="lineHover">
              <Link to="Activites">Activités</Link>
            </li>
            <li className="lineHover">
              <Link to="APropos">A propos</Link>
            </li>
            <li className="lineHover">
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
