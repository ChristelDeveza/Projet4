/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import CardAdherent from "./CardAdherent";

function CardAdherentList(props) {
  const { updateDatas, deleteCardAdherent } = props;
  return (
    <div>
      {" "}
      {updateDatas.map((data) => (
        <>
          <CardAdherent key={data.id} {...data} />
          <button
            type="button"
            className="deleteBtn"
            onClick={() => {
              deleteCardAdherent(data.id);
            }}
          >
            x
          </button>
        </>
      ))}
    </div>
  );
}

export default CardAdherentList;
