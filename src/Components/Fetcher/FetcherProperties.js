import React from "react";
import {Button} from '@material-ui/core';
import {spacing} from '@material-ui/system';
import {styled} from "@material-ui/core/styles";


import {
  getUpdatedStatuses,
} from "../../Helpers/PropertiesFixer.js";

function FetcherProperties(props) {
  const {
    allProperties,

    statusesString,     
    setStatusesString,

    // validProperties,
    setValidProperties,
  } = props;

  const SpacedButton = styled(Button)(spacing);

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
      statusesNew[p] ? [...acc, p] : acc, [] );      
    setValidProperties(validPropertiesNew);
  };

  const handleInvertSelection = (event) => {
    const statusesNew = Object.assign({}, JSON.parse(statusesString));

    for (const property of allProperties) {
      statusesNew[property] = !statusesNew[property];
    }

    setStatusesString(JSON.stringify(statusesNew));
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

    const statusesNewString = JSON.stringify(statusesNew);
    setStatusesString(statusesNewString);
    updateValidProperties(statusesNew);
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


      
      <div>
        <button 
          className="properties-button" 
          disabled={numSelectedProperties === 0}
          onClick={handleUnselectAll}
        >
          Unselect all
        </button>
        
        <button 
          className="properties-button" 
          disabled={numSelectedProperties === numTotalProperties}
          onClick={handleSelectAll}
        >
          Select all
        </button>

        <button 
          className="properties-button" 
          onClick={handleInvertSelection}
        >
          Invert Selection
        </button>
      </div>

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
        disabled={numSelectedProperties === 0}
        onClick={handleUnselectAll}
      >
        Unselect all
      </SpacedButton>

      <SpacedButton variant="contained"
        color="primary"
        mx="5px"
        disabled={numSelectedProperties === numTotalProperties}
        onClick={handleSelectAll}
      >
        Select all
      </SpacedButton>  
    </div>
  );
}

export default FetcherProperties;