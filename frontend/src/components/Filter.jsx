/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";

function Filter({ abonnement, checkedAbonnement, filterAbonnementArray }) {
  return (
    <div>
      <h3>Filtrer par abonnement</h3>
      {abonnement.map((name, index) => {
        return (
          <ul>
            <li key={index}>
              <div>
                <div>
                  <input
                    type="checkbox"
                    value={name}
                    onChange={() => filterAbonnementArray(index)}
                    checked={checkedAbonnement[index]}
                  />
                </div>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Filter;
