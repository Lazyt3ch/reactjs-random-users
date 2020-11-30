import React, {useState, useRef} from "react";
import constants from "../constants.js";


function FetcherSetup(props) {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
    numResultsDefault,
  } = constants.fetcher;

  const numResultsRangeRef = useRef();
  const numResultsRef = useRef();

  const [numResults, setNumResults] = useState(numResultsDefault);

  function handleFetchUsers() {

  }

  function handleOnChangeRange() {
    if (numResults !== numResultsRangeRef.current.value) {
      // TODO
    }
  }

  function handleOnChangeText() {

  }


  return (
    <div>
      <label for="num_results_range" className="input-label">
        Number of results
      </label>
      <input type="range" 
        id="num_results_range" 
        name="num_results_range" 
        min={numResultsLowerLimit} 
        max={numResultsUpperLimit}
        value={numResultsDefault}
        ref={numResultsRangeRef}
        onChange={handleOnChangeRange}
      />
      <input type="text" 
        id="num_results" 
        ref={numResultsRef}
        value={numResultsDefault}
        onChange={handleOnChangeText}
      />

      <button onClick={handleFetchUsers}>
        Fetch Users
      </button>
    </div>
  );
}

export default FetcherSetup;