/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import ButtonMyAccount from "./ButtonMyAccount";
import logo from "../assets/Logo projet 4.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const navContainerRef = useRef(null);
  const hamburgerRef = useRef(null);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  function closeSidebarAndNavigate() {
    setSidebar(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setSidebar(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="Navbar">
      <nav>
        <ul>
          <div className="button-container">
            <button
              ref={hamburgerRef}
              className={sidebar ? "hamburger open" : "hamburger"}
              type="button"
              aria-label="Toggle nav"
              aria-expanded={sidebar ? "true" : "false"}
              onClick={showSidebar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            ref={navContainerRef}
            className={!sidebar ? "nav-container" : "nav-container open"}
          >
            <li>
              <Link
                to="/"
                className="nav-icon"
                aria-label="visit homepage"
                aria-current="page"
                onClick={closeSidebarAndNavigate}
              >
                <img className="logo-navbar" src={logo} alt="logo" />
              </Link>
            </li>

            <li className="lineHover">
              <Link to="/" onClick={closeSidebarAndNavigate}>
                Accueil
              </Link>
            </li>
            <li className="lineHover">
              <Link to="Abonnements" onClick={closeSidebarAndNavigate}>
                Abonnements
              </Link>
            </li>
            <li className="lineHover">
              <Link to="Activites" onClick={closeSidebarAndNavigate}>
                Activités
              </Link>
            </li>
            <li className="lineHover">
              <Link to="APropos" onClick={closeSidebarAndNavigate}>
                A propos
              </Link>
            </li>
            <li className="lineHover">
              <Link to="Contact" onClick={closeSidebarAndNavigate}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="MonCompte" onClick={closeSidebarAndNavigate}>
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
