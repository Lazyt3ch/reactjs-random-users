import React from "react";
import {getUpdatedStatuses, getAllProperties} from "../../utils/propertiesFixer";
import SpacedButton from "../SpacedButton/SpacedButton";
import SpacedCheckbox from "../SpacedCheckbox/SpacedCheckbox";
import PropTypes from "prop-types";

// import store from "../../redux/store";
import {RootState} from "../../redux/store";
import actionTypes from "../../redux/actionTypes";
import {useSelector, useDispatch} from 'react-redux';


// interface Props {
//   allProperties: string[];

//   statuses: [string, boolean][];
//   setStatuses: React.Dispatch<React.SetStateAction<[string, boolean][]>>;

//   setValidProperties: React.Dispatch<React.SetStateAction<string[]>>;
// }

// function FetcherProperties(props: Props) {
function FetcherProperties() {  
  // const {
  //   allProperties,

  //   statuses, 
  //   setStatuses,

  //   setValidProperties,
  // } = props;
  const allProperties = getAllProperties();
  const dispatch = useDispatch();
  // type ArrayOfStringBooleanTuples = RootState.statuses;


  const handleUnselectAll = () => {
    // setStatuses(getUpdatedStatuses(allProperties, false));
    // setValidProperties([]);
    const statuses = getUpdatedStatuses(allProperties, false);
    dispatch({ type: actionTypes.STATUSES, payload: statuses });
  };

  const handleSelectAll = () => {
    // setStatuses(getUpdatedStatuses(allProperties, true));
    // setValidProperties(allProperties);
    const statuses = getUpdatedStatuses(allProperties, true);
    dispatch({ type: actionTypes.STATUSES, payload: statuses });
  };

  // const updateValidProperties = (statusesNew: [string, boolean][]): void => {
  const updateValidProperties = (updatedStatuses: [string, boolean][]): void => {
    // const validPropertiesNew = statusesNew
    const updatedValidProperties = updatedStatuses
      .filter( ([property, status]) => status && allProperties.includes(property) )
      .map( ([property, _]) => property );
    // setValidProperties(validPropertiesNew);
    dispatch({ type: actionTypes.VALID_PROPERTIES, payload: updatedValidProperties})
  };

  const updateStatusesAndProperties = (statusesNew: [string, boolean][]): void => {
    setStatuses(statusesNew);
    updateValidProperties(statusesNew);
  };

  const handleInvertSelection = () => {
    const statusesNew: [string, boolean][] = statuses.map( 
      ([property, status]) => [property, !status] );
    updateStatusesAndProperties(statusesNew);
  };
  
  const handleSingleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {checked, name} = event.target;
    const statusesNew: [string, boolean][] = statuses.map( ([property, oldStatus]) => 
      ( property === name ? [property, checked] : [property, oldStatus] ) );
    updateStatusesAndProperties(statusesNew);
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

FetcherProperties.propTypes = {
  allProperties: PropTypes.array.isRequired,

  statuses: PropTypes.array.isRequired,
  setStatuses: PropTypes.func.isRequired,

  setValidProperties: PropTypes.func.isRequired,
};

export default FetcherProperties;