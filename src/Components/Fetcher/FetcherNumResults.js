import React from "react";
import constants from "../../constants.js";
import fixNumResults from "../../Helpers/NumResultsFixer.js";

import {Autocomplete, TextField} from '@material-ui/lab';

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

  const numUsersArr = [
    50,
    100,
    200,
    500,
    1000,
  ];

  function handleRangeValueChange(event) {
    setNumResults(event.target.value);
  }

  function handleTextValueChange(event) {
    setNumResults(fixNumResults(event.target.value));
  }

  return (
    <div style={{marginTop: "1rem"}}>
      <Autocomplete
        id="num_results"
        options={numUsersArr}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
      />

      <label htmlFor="num_results_range" className="input-label">
        Number of users to retrieve data for 
        ({numResultsLowerLimit} &mdash; {numResultsUpperLimit})
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