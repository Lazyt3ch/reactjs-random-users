import React from "react";
import constants from "../../constants.js";
import {getAllProperties} from "../../Helpers/PropertiesFixer.js";

function FetcherProperties(props) {
  const allProperties = getAllProperties(constants);
  // console.log("allProperties =", allProperties);
  const allStatuses = allProperties.reduce( (acc, p) => ({...acc, [p]: true}), {});
  console.log("allStatuses =", allStatuses);

  return (
    <div style={{marginTop: "1rem"}}>
      <p style={{marginLeft: "2rem"}}>Select user properties to retrieve</p>
      <ul style={{listStyleType: "none"}}>
        {allProperties.map( (property, idx) => 
          <li key={idx} style={{marginBottom: ".5rem"}}>            
            <input type="checkbox" checked={allStatuses[idx]} />
            <span style={{marginLeft: "1rem"}}>
              {property}
            </span>
          </li>)
        } 
      </ul>
    </div>
  );
}

export default FetcherProperties;