import React from "react";
import { GiCheckMark } from "react-icons/gi";
import "../CSS/WhyUs.css";

function WhyUs() {
  return (
    <div className="advantages">
      <div>
        <h2>NOS AVANTAGES</h2>
        <hr />
      </div>
      <p>
        <GiCheckMark />
        Des coachs à votre écoute
      </p>
      <p>
        <GiCheckMark />
        Du matériel performant, régulièrement renouvelé
      </p>
      <p>
        <GiCheckMark />
        Des programmes adaptés selon vos objectifs
      </p>
      <p>
        <GiCheckMark />
        Des prix compétitifs
      </p>
    </div>
  );
}

export default WhyUs;
