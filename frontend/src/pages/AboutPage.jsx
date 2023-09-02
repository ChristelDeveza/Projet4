import React from "react";
import coach1 from "../assets/coach1.jpg";
import coach2 from "../assets/coach2.jpg";
import coach3 from "../assets/coach3.jpg";
import coach4 from "../assets/coach4.jpg";

function AboutPage() {
  return (
    <div className="aboutPage-container">
      <div className="div1">
        <img className="imgSize" src={coach1} alt="coach1" />
      </div>
      <div className="div2">
        <img className="imgSize" src={coach2} alt="coach2" />
      </div>
      <div className="div3">
        <img className="imgSize" src={coach3} alt="coach3" />
      </div>
      <div className="div4">
        <img className="imgSize" src={coach4} alt="coach4" />
      </div>
    </div>
  );
}

export default AboutPage;
