import React from "react";
import SpacedButton from "../SpacedButton/SpacedButton.js";

import {getUpdatedStatuses} from "../../Helpers/PropertiesFixer.js";

function FetcherProperties(props) {
  const {
    allProperties,

    statusesString,     
    setStatusesString,

    setValidProperties,
  } = props;

  const handleUnselectAll = (event) => {
    setStatusesString(getUpdatedStatuses(false, allProperties));
    setValidProperties([]);
  };

  const handleSelectAll = (event) => {
    setStatusesString(getUpdatedStatuses(true, allProperties));
    setValidProperties(allProperties);
  };

  const updateValidProperties = (statusesNew) => {
    const validPropertiesNew = allProperties.reduce( (acc, p) =>
      statusesNew[p] ? [...acc, p] : acc, 
      [] );      
    setValidProperties(validPropertiesNew);
  };

  const updateProperties = statusesNew => {
    const statusesNewString = JSON.stringify(statusesNew);
    setStatusesString(statusesNewString);
    updateValidProperties(statusesNew);
  };

  const handleInvertSelection = (event) => {
    const statusesNew = Object.assign({}, JSON.parse(statusesString));

    for (const property of allProperties) {
      statusesNew[property] = !statusesNew[property];
    }

    updateProperties(statusesNew);
  };
  
  const handleSingleCheck = (event) => {
    const {checked, name} = event.target;
    const statusesNew = Object.assign({}, JSON.parse(statusesString));

    for (const property of allProperties) {
      if (property === name) {
        statusesNew[property] = checked;
        break;
      }
    }

    updateProperties(statusesNew);
  };

  const propertiesStatuses = JSON.parse(statusesString);
  const numTotalProperties = allProperties.length;

  const numSelectedProperties = Object.values(propertiesStatuses)
    .reduce( (acc, value) => acc + value, 0 );  


  return (
    <div style={{marginTop: "1rem"}}>
      <p>
        Select user properties to retrieve
      </p>
      
      <ul style={{listStyleType: "none", paddingLeft: 0}}>
        {allProperties.map( (property) => 
          <li key={property} style={{marginBottom: ".5rem"}}>            
            <input 
              type="checkbox" 
              name={property}
              checked={propertiesStatuses[property]} 
              onChange={handleSingleCheck}
            />
            <span style={{marginLeft: "1rem"}}>
              {property}
            </span>
          </li>)
        } 
      </ul>

      <SpacedButton variant="contained"
        color="primary"
        m="5px"
        disabled={numSelectedProperties === 0}
        onClick={handleUnselectAll}
      >
        Unselect all
      </SpacedButton>

      <SpacedButton variant="contained"
        color="primary"
        m="5px"
        disabled={numSelectedProperties === numTotalProperties}
        onClick={handleSelectAll}
      >
        Select all
      </SpacedButton>  

      <SpacedButton variant="contained"
        color="primary"
        mx="5px"
        onClick={handleInvertSelection}
      >
        Invert Selection
      </SpacedButton>

    </div>
  );
}

export default FetcherProperties;