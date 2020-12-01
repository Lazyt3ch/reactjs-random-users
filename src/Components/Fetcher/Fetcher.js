import React, {useState} from "react";
import FetcherSetup from "./FetcherSetup.js";
import FetcherSetup2 from "./FetcherSetup2.js";
import FetcherLaunch from "./FetcherLaunch.js";
import constants from "../../constants.js";
import fixNumResults from "../../Helpers/NumResultsFixer.js";

function Fetcher(props) {
  const {numResultsDefault} = constants;
  const [numResults, setNumResults] = useState(numResultsDefault);

  function handleRangeValueChange(value) {
    // setNumResults(numResultsRangeRef.current.value);
    setNumResults(value);
  }

  function handleTextValueChange(value) {
    // setNumResults(fixNumResults(numResultsTextRef.current.value));
    setNumResults(fixNumResults(value));
  }

  return (
    <div>
      <FetcherSetup 
        numResults={numResults} 
        onRangeValueChange = {handleRangeValueChange}
        onTextValueChange = {handleTextValueChange}
      />
      <FetcherSetup2 />
      <FetcherLaunch />
    </div>
  );
}

export default Fetcher;
