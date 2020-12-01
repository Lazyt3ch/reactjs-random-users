import React from "react";
import constants from "../../constants.js";

function FetcherNumResults(props) {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
  } = constants;

  // console.log("numResultsLowerLimit, numResultsUpperLimit =",
  //   numResultsLowerLimit, numResultsUpperLimit);  

  const {
    numResults, 
    onRangeValueChange, 
    onTextValueChange,
  } = props;

  console.log("onRangeValueChange, onTextValueChange =",
    onRangeValueChange, onTextValueChange);

  const inputTextSize = numResultsUpperLimit.toString().length;

  // const numResultsRangeRef = useRef();
  // const numResultsTextRef = useRef();

  return (
    <div style={{marginLeft: "2rem", marginTop: "1rem"}}>
      <label htmlFor="num_results_range" className="input-label">
        Number of results ({numResultsLowerLimit} &mdash; {numResultsUpperLimit})
      </label>

      <input type="range" 
        id="num_results_range" 
        name="num_results_range" 
        min={numResultsLowerLimit} 
        max={numResultsUpperLimit}
        value={numResults}
        onChange={onRangeValueChange}
      />

      <input type="text" 
        id="num_results_text" 
        size={inputTextSize}
        value={numResults}
        onChange={onTextValueChange}
      />
    </div>
  );
}

export default FetcherNumResults;