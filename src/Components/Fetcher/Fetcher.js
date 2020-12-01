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

  const updateStatuses = (status, modIdx=-1) => {
    allProperties.reduce( (acc, p, idx) => 
      modIdx === idx ? ({...acc, [p]: status}) : acc, {});
    return JSON.stringify(allProperties);
  };

  const [statusesString, setStatusesString] = useState(updateStatuses(true));
  const handleUnselectAll = (event) => setStatusesString(updateStatuses(false));
  const handleSelectAll = (event) => setStatusesString(updateStatuses(true));
  const handleUpdateStatus = (event, idx) => 
    setStatusesString(updateStatuses(event.target.value, idx));

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
        handleUpdateStatus={handleUpdateStatus}
      />
      
      <FetcherLaunch />
    </div>
  );
}

export default Fetcher;
