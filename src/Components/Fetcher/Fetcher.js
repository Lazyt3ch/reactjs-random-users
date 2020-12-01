import React, {useState} from "react";

import FetcherNumResults from "./FetcherNumResults.js";
import FetcherProperties from "./FetcherProperties.js";
import FetcherLaunch from "./FetcherLaunch.js";

import constants from "../../constants.js";
import fixNumResults from "../../Helpers/NumResultsFixer.js";

function Fetcher(props) {
  const {numResultsDefault} = constants;
  const [numResults, setNumResults] = useState(numResultsDefault);
  console.log("FETCHER: numResults =", numResults);

  function handleRangeValueChange(event) {
    // setNumResults(numResultsRangeRef.current.value);
    console.log("RANGE: event.target.value =", event.target.value);
    setNumResults(event.target.value);
  }

  function handleTextValueChange(event) {
    // setNumResults(fixNumResults(numResultsTextRef.current.value));
    console.log("TEXT: event.target.value =", event.target.value);
    setNumResults(fixNumResults(event.target.value));
  }

  return (
    <div>
      <FetcherNumResults 
        numResults={numResults} 
        onRangeValueChange={handleRangeValueChange}
        onTextValueChange={handleTextValueChange}
      />
      <FetcherProperties />
      <FetcherLaunch />
    </div>
  );
}

export default Fetcher;
