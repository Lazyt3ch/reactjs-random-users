import React from "react";
import {getUpdatedStatuses} from "../../Helpers/propertiesFixer";
import SpacedButton from "../SpacedButton/SpacedButton.js";
import SpacedCheckbox from "../SpacedCheckbox/SpacedCheckbox.js";
import PropTypes from "prop-types";

interface Props {
  allProperties: string[];

  statuses: [string, boolean][];
  setStatuses: function;
  setValidProperties: function;
}

function FetcherProperties(props: Props) {
  // const {allProperties}: {allProperties: string[]} = props;
  // const {statuses}: {statuses: [string, boolean][]} = props;
  // const {setStatuses} = props;
  // const {setValidProperties} = props;

  const {
    allProperties,

    statuses, 
    setStatuses,

    setValidProperties,
  } = props;

  const handleUnselectAll = () => {
    setStatuses(getUpdatedStatuses(allProperties, false));
    setValidProperties([]);
  };

  const handleSelectAll = () => {
    setStatuses(getUpdatedStatuses(allProperties, true));
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
    <div>
      <p style={{marginBlockStart: "1.5rem", marginBlockEnd: 0}}>
        Select user properties to retrieve
      </p>

      <div className="fetcher-properties-wrapper">      
        <ul className="fetcher-properties-checkboxes-wrapper"
          style={{listStyleType: "none", paddingLeft: 0}}
        
        >
          {allProperties.map( (property) => 
            <li key={property} >            
              <SpacedCheckbox 
                name={property}
                color="primary"
                mb={"0px"}
                checked={propertiesStatuses[property]} 
                onChange={handleSingleCheck}
              />
              <span>
                {property}
              </span>
            </li>)
          } 
        </ul>
        
        <div className="fetcher-properties-buttons-wrapper">
          <SpacedButton variant="outlined"
            color="primary"
            mb={"20px"}
            disabled={numSelectedProperties === 0}
            onClick={handleUnselectAll}
          >
            Unselect all
          </SpacedButton>

          <SpacedButton variant="outlined"
            color="primary"
            mb={"20px"}
            disabled={numSelectedProperties === numTotalProperties}
            onClick={handleSelectAll}
          >
            Select all
          </SpacedButton>  

          <SpacedButton variant="outlined"
            color="primary"
            onClick={handleInvertSelection}
          >
            Invert Selection
          </SpacedButton>
        </div>
      </div>
    </div>
  );
}

FetcherProperties.propTypes = {
  allProperties: PropTypes.array.isRequired,

  statuses: PropTypes.object.isRequired,
  setStatuses: PropTypes.func.isRequired,

  setValidProperties: PropTypes.func.isRequired,
};

export default FetcherProperties;