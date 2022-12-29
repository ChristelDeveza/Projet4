import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../CSS/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2 className="contact">Nous contacter</h2>
      <p className="pContact">
        <AiFillMail /> rue des Fleurs, 00000 VILLE
      </p>
      <p className="pContact">
        <BsFillTelephoneFill /> 0504030201
      </p>
      <p className="pContact">
        {" "}
        <MdOutlineAlternateEmail /> fitncheap@exemple.com
      </p>
      <p className="pContact">
        Site réalisé dans le cadre d'une formation - Sujet réalisation d'un site
        frontend et backend
      </p>
    </div>
  );
}

export default Footer;
