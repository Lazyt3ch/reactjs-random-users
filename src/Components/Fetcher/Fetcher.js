import React, {useState} from "react";

import FetcherNumResults from "./FetcherNumResults.js";
import FetcherProperties from "./FetcherProperties.js";
import FetcherLaunch from "./FetcherLaunch.js";

import constants from "../../constants.js";
import fixNumResults from "../../Helpers/NumResultsFixer.js";
import {getAllProperties} from "../../Helpers/PropertiesFixer.js";

function Fetcher(props) {
  const {numResultsDefault} = constants;
  const [numResults, setNumResults] = useState(numResultsDefault);

  function handleRangeValueChange(event) {
    setNumResults(event.target.value);
  }

  function handleTextValueChange(event) {
    setNumResults(fixNumResults(event.target.value));
  }

  const allProperties = getAllProperties(constants);
  console.log("FETCHER: allProperties =", allProperties)

  const updateStatuses = (status) => {
    const statusProperties = allProperties.reduce( (acc, property) => 
      ({...acc, [property]: status}), {});
    return JSON.stringify(statusProperties);
  };

  const [statusesString, setStatusesString] = useState(updateStatuses(true));
  const handleUnselectAll = (event) => setStatusesString(updateStatuses(false));
  const handleSelectAll = (event) => setStatusesString(updateStatuses(true));
  
  const handleCheck = (event) => {
    const {checked, name} = event.target;
    console.log("checked, name =", checked, name)
    const statusesCopy = Object.assign({}, JSON.parse(statusesString));
    for (const key in Object.keys(statusesCopy)) {
      if (key === name) {
        statusesCopy[key] = !checked;
        break;
      }
    }
    console.log("statusesCopy =", statusesCopy)
    const statusesCopyString = JSON.stringify(statusesCopy);
    setStatusesString(statusesCopyString);
  };
    

  return (
    <div>
      <FetcherNumResults 
        numResults={numResults} 
        onRangeValueChange={handleRangeValueChange}
        onTextValueChange={handleTextValueChange}
      />
      
      <FetcherProperties 
        statusesString={statusesString}
        handleUnselectAll={handleUnselectAll}
        handleSelectAll={handleSelectAll}
        handleUpdateStatus={handleCheck}
      />
      
      <FetcherLaunch />
    </div>
  );
}

export default Fetcher;
