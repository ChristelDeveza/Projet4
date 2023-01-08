/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import CardAdherent from "./CardAdherent";

function CardAdherentList(props) {
  const { updateDatas, deleteCardAdherent } = props;
  return (
    <div className="cardList">
      {" "}
      <h4>Liste des adhérents</h4>
      {updateDatas.map((data) => (
        <div className="display-adherent">
          <CardAdherent key={data.id} {...data} />
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
