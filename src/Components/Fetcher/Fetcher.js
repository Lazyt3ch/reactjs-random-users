import React, {useState} from "react";

import FetcherNumResults from "./FetcherNumResults.js";
import FetcherProperties from "./FetcherProperties.js";
import FetcherLaunch from "./FetcherLaunch.js";

import constants from "../../constants.js";
import fixNumResults from "../../Helpers/NumResultsFixer.js";
import {getAllProperties, getValidProperties} from "../../Helpers/PropertiesFixer.js";

function Fetcher(props) {
  const {numResultsDefault} = constants;
  const {results, setResults} = props;
  const [numResults, setNumResults] = useState(numResultsDefault);

  function handleRangeValueChange(event) {
    setNumResults(event.target.value);
  }

  function handleTextValueChange(event) {
    setNumResults(fixNumResults(event.target.value));
  }

  const allProperties = getAllProperties(constants);

  const getUpdatedStatuses = (status) => {
    const statusProperties = allProperties.reduce( (acc, property) => 
      ({...acc, [property]: status}), {});
    return JSON.stringify(statusProperties);
  };

  const [statusesString, setStatusesString] = useState(getUpdatedStatuses(true));
  const [validProperties, setValidProperties] = useState(getValidProperties(statusesString));

  const handleUnselectAll = (event) => {
    setStatusesString(getUpdatedStatuses(false));
    setValidProperties([]);
  };

  const handleSelectAll = (event) => {
    setStatusesString(getUpdatedStatuses(true));
    setValidProperties(allProperties);
  }

  const updateValidProperties = (statusesNew) => {
    const validPropertiesNew = allProperties.reduce( (acc, p) =>
      statusesNew[p] ? [...acc, p] : acc, [] );      
    setValidProperties(validPropertiesNew);
  }

  const handleInvertSelection = (event) => {
    const statusesNew = Object.assign({}, JSON.parse(statusesString));

    for (const property of allProperties) {
      statusesNew[property] = !statusesNew[property];
    }

    setStatusesString(JSON.stringify(statusesNew));
  }
  
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
        handleInvertSelection={handleInvertSelection}  
        handleSingleCheck={handleSingleCheck}        
      />
      
      <FetcherLaunch
        numResults={numResults} 
        validProperties={validProperties}
        results={results}
        setResults={setResults}
      />
    </div>
  );
}

export default Fetcher;
