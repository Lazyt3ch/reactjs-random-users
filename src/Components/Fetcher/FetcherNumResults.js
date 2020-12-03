import React from "react";
import constants from "../../constants.js";
import fixNumResults from "../../Helpers/NumResultsFixer.js";

function FetcherNumResults(props) {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
  } = constants;

  const {
    numResults, 
    setNumResults,
  } = props;

  const inputTextSize = numResultsUpperLimit.toString().length;

  function handleRangeValueChange(event) {
    setNumResults(event.target.value);
  }

  function handleTextValueChange(event) {
    setNumResults(fixNumResults(event.target.value));
  }
  
  return (
    <div style={{marginLeft: "2rem", marginTop: "1rem"}}>
      <label htmlFor="num_results_range" className="input-label">
        Number of users to retrieve data for ({numResultsLowerLimit} &mdash; {numResultsUpperLimit})
      </label>

      <input type="range" 
        id="num_results_range" 
        name="num_results_range" 
        min={numResultsLowerLimit} 
        max={numResultsUpperLimit}
        value={numResults}
        onChange={handleRangeValueChange}
      />

      <input type="text" 
        id="num_results_text" 
        size={inputTextSize}
        value={numResults}
        onChange={handleTextValueChange}
      />
    </div>
  );
}

export default FetcherNumResults;