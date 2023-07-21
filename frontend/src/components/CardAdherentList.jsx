/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import CardAdherent from "./CardAdherent";

function CardAdherentList(props) {
  const { updateDatas, deleteCardAdherent } = props;
  // console.log(updateDatas.map((el) => el.id).join(" "));
  return (
    <div className="cardList">
      {" "}
      <h4>Liste des adhérents</h4>
      {updateDatas.map((data) => (
        <div className="display-adherent">
          <Link to={`UserProfile/${data.id}`}>
            <CardAdherent key={data.id} {...data} />
          </Link>
          <button
            type="button"
            className="deleteBtn-list"
            onClick={() => {
              deleteCardAdherent(data.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardAdherentList;
