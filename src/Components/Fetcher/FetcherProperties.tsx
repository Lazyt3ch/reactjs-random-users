import React from "react";
import {
  getValidProperties, 
  getUpdatedStatuses, 
  getAllProperties,
  } from "../../utils/propertiesFixer";
import SpacedButton from "../SpacedButton/SpacedButton";
import SpacedCheckbox from "../SpacedCheckbox/SpacedCheckbox";

import {RootState} from "../../redux/store";
import actionTypes from "../../redux/actionTypes";
import {useSelector, useDispatch} from 'react-redux';
import {ArrayOfStringBooleanTuples} from "../../redux/reducers/statusesReducer";

function FetcherProperties() {  
  const dispatch = useDispatch();

  const allProperties = getAllProperties();
  
  const statuses = useSelector((state: RootState) => state.statuses);

  let updatedStatuses;
  let validProperties;

  if (Object.keys(statuses).length === 0) {
    updatedStatuses = getUpdatedStatuses(allProperties, false);
    validProperties = getValidProperties(updatedStatuses);
    dispatch({ type: actionTypes.STATUSES, payload: updatedStatuses });
    dispatch({ type: actionTypes.VALID_PROPERTIES, payload: validProperties });
  }

  const handleUnselectAll = () => {
    const updatedStatuses = getUpdatedStatuses(allProperties, false);
    dispatch({ type: actionTypes.STATUSES, payload: updatedStatuses });
  };

  const handleSelectAll = () => {
    const updatedStatuses = getUpdatedStatuses(allProperties, true);
    dispatch({ type: actionTypes.STATUSES, payload: updatedStatuses });
  };

  const updateValidProperties = (updatedStatuses: ArrayOfStringBooleanTuples): void => {
    const updatedValidProperties = updatedStatuses
      .filter( ([property, status]) => status && allProperties.includes(property) )
      .map( ([property, _]) => property );
    dispatch({ type: actionTypes.VALID_PROPERTIES, payload: updatedValidProperties});
  };

  const updateStatuses = (updatedStatuses: ArrayOfStringBooleanTuples): void => {
    dispatch({ type: actionTypes.STATUSES, payload: updatedStatuses})
    updateValidProperties(updatedStatuses);
  };

  const handleInvertSelection = () => {
    const updatedStatuses: ArrayOfStringBooleanTuples = statuses.map( 
      ([property, status]) => [property, !status] );
    updateValidProperties(updatedStatuses);
    updateStatuses(updatedStatuses);
  };
  
  const handleSingleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {checked, name} = event.target;
    const updatedStatuses: ArrayOfStringBooleanTuples = statuses.map( ([property, oldStatus]) => 
      [ property, (property === name ? checked : oldStatus) ] );
    updateValidProperties(updatedStatuses);
    updateStatuses(updatedStatuses);
  };

  const numTotalProperties = allProperties.length;

  const numSelectedProperties = statuses.reduce( 
    (acc, [_, status]) => acc + (status ? 1 : 0), 0 );  

  const getPropertyStatus = (propertyName: string): boolean => {
    const item = statuses.find(item => item[0] === propertyName);
    return (item === undefined)  
      ? false   // Make TypeScript happy
      : item[1];
  }


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
                checked={getPropertyStatus(property)}
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

export default FetcherProperties;