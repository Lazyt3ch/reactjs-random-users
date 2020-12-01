import React, {useState} from "react";
import constants from "../../constants.js";
import {getValidProperties} from "..Helpers/PropertiesFixer.js";

function FetcherSetup2(props) {
  const allProperties = getValidProperties(constants);
  console.log("allProperties =", allProperties);

  return (
    <div>
      <ul>
        {allProperties.map( p => <li>{p}</li>)}
      </ul>
    </div>
  );
}

export default FetcherSetup2;