import React, {useRef} from "react";
import constants from "../../constants.js";

function FetcherNumResults(props) {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
  } = constants;

  const {
    numResults, 
    handleRangeValueChange, 
    handleTextValueChange
  } = props;

  const inputTextSize = numResultsUpperLimit.toString().length;

  const numResultsRangeRef = useRef();
  const numResultsTextRef = useRef();

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
        onChange={handleRangeValueChange}
      />

      <input type="text" 
        id="num_results_text" 
        size={inputTextSize}
        value={numResults}
        ref={numResultsTextRef}
        onChange={handleTextValueChange}
      />
    </div>
  );
}

export default FetcherNumResults;