import React, {useState, useRef} from "react";
import constants from "../constants.js";
import fixNumResults from "../Helpers/NumResultsFixer.js";
import fetchUsers from "../Helpers/UsersFetcher.js";

function FetcherSetup(props) {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
    numResultsDefault,
  } = constants.fetcher;

  const inputTextSize = numResultsUpperLimit.toString().length;

  const numResultsRangeRef = useRef();
  const numResultsTextRef = useRef();

  const [numResults, setNumResults] = useState(numResultsDefault);

  const [isFetching, setIsFetching] = useState(false);

  async function handleFetchUsers() {
    // console.log("handleFetchUsers button clicked")
    setIsFetching(true);
    const results = await fetchUsers(numResults);
    setIsFetching(false);
    console.log(results);
  }

  function handleOnChangeRange() {
    setNumResults(numResultsRangeRef.current.value);
  }

  function handleOnChangeText() {
    setNumResults(fixNumResults(numResultsTextRef.current.value));
  }

  return (
    <div>
      <label htmlFor="num_results_range" className="input-label">
        Number of results ({numResultsLowerLimit} &mdash; {numResultsUpperLimit})
      </label>

      <input type="range" 
        id="num_results_range" 
        name="num_results_range" 
        min={numResultsLowerLimit} 
        max={numResultsUpperLimit}
        value={numResults}
        ref={numResultsRangeRef}
        onChange={handleOnChangeRange}
      />

      <input type="text" 
        id="num_results_text" 
        size={inputTextSize}
        value={numResults}
        ref={numResultsTextRef}
        onChange={handleOnChangeText}
      />

      <div>
        <button onClick={handleFetchUsers} disabled={isFetching}>
          Fetch Users
        </button>
      </div>
    </div>
  );
}

export default FetcherSetup;