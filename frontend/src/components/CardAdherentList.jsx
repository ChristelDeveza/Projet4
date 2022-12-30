/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import CardAdherent from "./CardAdherent";

function CardAdherentList(props) {
  const { updateDatas } = props;
  return (
    <div>
      {" "}
      {updateDatas.map((data) => (
        <CardAdherent key={data.id} {...data} />
      ))}
    </div>
  );
}

export default CardAdherentList;
