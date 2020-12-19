import React, {useState, useEffect} from "react";
import constants from "../../constants.js";
import fixNumResults from "../../Helpers/NumResultsFixer.js";
import {TextField} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';

function FetcherNumResults(props) {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
    numResultsDefault,
  } = constants;

  const {
    numResults,
    setNumResults,
  } = props;

  const options = [
    20,
    50,
    100,
    200,
    500,
    1000,
  ];

  const [value, setValue] = useState(numResults || numResultsDefault);
  const [inputValue, setInputValue] = useState((numResults || numResultsDefault).toString());

  useEffect( 
    () => {
      const fixedNum = fixNumResults(value);
      setValue(fixedNum);
      setNumResults(fixedNum);
    }, [value, setNumResults]
  );

  useEffect( 
    () => {
      const fixedNum = fixNumResults(inputValue);
      setInputValue(fixedNum.toString());
      setNumResults(fixedNum);
    }, [inputValue, setNumResults]
  );

  return (
    <div style={{marginTop: "1rem"}}>
      <p>Select or enter the number of users  
        ({numResultsLowerLimit} &mdash; {numResultsUpperLimit})</p>

      <Autocomplete
        id="num_results"
        options={options}
        getOptionLabel={(option) => option.toString()}
        style={{ width: "12rem" }}
        freeSolo={true}
        value={value}
        inputValue={inputValue}
        onChange={(event, valueNew) => setValue(valueNew)}
        onInputChange={(event, inputValueNew) => setInputValue(inputValueNew)}
        renderInput={(params) => 
          <TextField {...params} 
            type="number"
            label="Number of users" variant="outlined" 
          />
        }
      />
    </div>
  );
}

export default FetcherNumResults;