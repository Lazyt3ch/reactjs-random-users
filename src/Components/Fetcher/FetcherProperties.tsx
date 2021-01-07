import React from "react";
import {getUpdatedStatuses} from "../../Helpers/propertiesFixer";
import SpacedButton from "../SpacedButton/SpacedButton";
import SpacedCheckbox from "../SpacedCheckbox/SpacedCheckbox";
import PropTypes from "prop-types";

interface Props {
  allProperties: string[];

  statuses: [string, boolean][];
  setStatuses: React.Dispatch<React.SetStateAction<[string, boolean][]>>;

  setValidProperties: React.Dispatch<React.SetStateAction<string[]>>;
}

function FetcherProperties(props: Props) {
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

  const updateValidProperties = (statusesNew: [string, boolean][]): void => {
    const validPropertiesNew = statusesNew
      .filter( ([property, status]) => status && allProperties.includes(property) )
      .map( ([property, _]) => property );
    setValidProperties(validPropertiesNew);
  };

  const updateStatusesAndProperties = (statusesNew: [string, boolean][]): void => {
    setStatuses(statusesNew);
    updateValidProperties(statusesNew);
  };

  const handleInvertSelection = () => {
    // const statusesNew = Object.assign({}, statuses);
    // for (const property of allProperties) {
    //   statusesNew[property] = !statusesNew[property];
    // }

    const statusesNew = statuses.map( ([property, status]) => [property, !status] );
    updateStatusesAndProperties(statusesNew);
  };

  
  /* Example of event handling: */
  // function handleBriefResultsChange(event: React.ChangeEvent<HTMLInputElement>): void {
  //   setIsBriefResults(event.target.checked);  
  // }

  const handleSingleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {checked, name} = event.target;
    // const statusesNew = Object.assign({}, statuses);

    // for (const property of allProperties) {
    //   if (property === name) {
    //     statusesNew[property] = checked;
    //     break;
    //   }
    // }

    // const statusesNew = JSON.parse(JSON.stringify(statuses)); // Deep-copy the array

    const statusesNew = statuses.map( ([property, oldStatus]) => 
      ( property === name ? [property, oldStatus] : [property, checked] ) );


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