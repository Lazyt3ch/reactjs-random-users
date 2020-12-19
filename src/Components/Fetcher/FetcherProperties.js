import React from "react";
import SpacedButton from "../SpacedButton/SpacedButton.js";

import {getUpdatedStatuses} from "../../Helpers/PropertiesFixer.js";

function FetcherProperties(props) {
  const {
    allProperties,

    statuses,     
    setStatuses,

    setValidProperties,
  } = props;

  const handleUnselectAll = (event) => {
    setStatuses(getUpdatedStatuses(false, allProperties));
    setValidProperties([]);
  };

  const handleSelectAll = (event) => {
    setStatuses(getUpdatedStatuses(true, allProperties));
    setValidProperties(allProperties);
  };

  const updateValidProperties = (statusesNew) => {
    const validPropertiesNew = allProperties.reduce( (acc, p) =>
      statusesNew[p] ? [...acc, p] : acc, 
      [] );      
    setValidProperties(validPropertiesNew);
  };

  const updateStatusesAndProperties = statusesNew => {
    setStatuses(statusesNew);
    updateValidProperties(statusesNew);
  };

  const handleInvertSelection = (event) => {
    const statusesNew = Object.assign({}, statuses);

    for (const property of allProperties) {
      statusesNew[property] = !statusesNew[property];
    }

    updateStatusesAndProperties(statusesNew);
  };
  
  const handleSingleCheck = (event) => {
    const {checked, name} = event.target;
    const statusesNew = Object.assign({}, statuses);

    for (const property of allProperties) {
      if (property === name) {
        statusesNew[property] = checked;
        break;
      }
    }

    updateStatusesAndProperties(statusesNew);
  };

  const propertiesStatuses = statuses;
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

      <SpacedButton variant="outlined"
        color="primary"
        m="5px"
        disabled={numSelectedProperties === 0}
        onClick={handleUnselectAll}
      >
        Unselect all
      </SpacedButton>

      <SpacedButton variant="outlined"
        color="primary"
        m="5px"
        disabled={numSelectedProperties === numTotalProperties}
        onClick={handleSelectAll}
      >
        Select all
      </SpacedButton>  

      <SpacedButton variant="outlined"
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