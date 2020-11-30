import React, {useRef} from "react";
import constants from "../constants.js";

function FetcherSetup(props) {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
    numResultsDefault,
  } = constants.fetcher;

  const inputNumResultsRange = useRef(null);

  return (
    <div>
      <label for="num_results_range" className="input-label">
        Number of results
      </label>
      <input type="range" id="num_results_range" name="num_results_range" 
          min={numResultsLowerLimit} max={numResultsUpperLimit} 
      />
      <input type="text" id="num_results" />

      <button onClick={() => handleFetchUsers(numResults)}>
        Fetch Users
      </button>
    </div>
  );
}

export default FetcherSetup;