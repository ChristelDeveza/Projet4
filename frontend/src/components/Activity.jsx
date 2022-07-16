import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Activity.css";
import muscu from "../assets/muscu.jpg";
import cardio from "../assets/cardio.jpg";
import collectif from "../assets/cours-collectifs.jpg";
import yoga from "../assets/yoga.jpg";

function Activity() {
  return (
    <div className="activity">
      <div>
        <h2>NOS ACTIVITES</h2>
        <hr />
      </div>
      <div className="box-img">
        <div className="pictures">
          <Link to="Activites">
            <img src={muscu} alt="musculation" />
            <div className="text-block">
              <h4>Musculation</h4>
            </div>
          </Link>
        </div>
        <div className="pictures">
          <Link to="Activites">
            <img src={cardio} alt="cardio-training" />
            <div className="text-block">
              <h4>Cardio-training</h4>
            </div>
          </Link>
        </div>
        <div className="pictures">
          <Link to="Activites">
            <img src={collectif} alt="cours-collectifs" />
            <div className="text-block">
              <h4>Cours collectifs</h4>
            </div>
          </Link>
        </div>
        <div className="pictures">
          <Link to="Activites">
            <img src={yoga} alt="yoga" />
            <div className="text-block">
              <h4>Yoga</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Activity;
