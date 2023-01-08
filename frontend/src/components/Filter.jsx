/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";

const abonnementName = ["CHEAP", "FIT", "GOLD"];

function Filter({ abonnement, checkedAbonnement, filterAbonnementArray }) {
  return (
    <div>
      <h3 className="title-filter">Filtrer par abonnement</h3>
      <div className="checkbox-filter">
        {abonnement.map((name, index) => {
          return (
            <ul>
              <li className="li-checkbox" key={index}>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      value={name}
                      onChange={() => filterAbonnementArray(index)}
                      checked={checkedAbonnement[index]}
                    />
                    <label>
                      {name}{" "}
                      {name === 1
                        ? abonnementName[0]
                        : name === 2
                        ? abonnementName[1]
                        : abonnementName[2]}
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
