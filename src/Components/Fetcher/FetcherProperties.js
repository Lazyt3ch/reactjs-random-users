import React from "react";
import constants from "../../constants.js";
import {getAllProperties} from "../../Helpers/PropertiesFixer.js";

function FetcherProperties(props) {
  const allProperties = getAllProperties(constants);
  console.log("allProperties =", allProperties);

  return (
    <div>
      <ul>
        {allProperties.map( (p, idx) => <li key={idx}>{p}</li>)} 
      </ul>
    </div>
  );
}

export default FetcherProperties;