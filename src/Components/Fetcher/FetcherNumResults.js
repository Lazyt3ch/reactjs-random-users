import React, {useState, useEffect} from "react";
import constants from "../../constants.js";
import fixNumResults from "../../Helpers/NumResultsFixer.js";
import {TextField} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import fixProperties from "../../Helpers/PropertiesFixer.js";

function FetcherNumResults(props) {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
    numResultsDefault,
  } = constants;

  const {
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

  const [value, setValue] = useState(numResultsDefault);
  const [inputValue, setInputValue] = useState(numResultsDefault.toString());

  useEffect( 
    () => {
      console.log("value =", value);
      const fixedNum = fixNumResults(value);
      console.log("fixedNum =", fixedNum);
      // setValue(fixedNum);
      setNumResults(fixedNum);
    }, [value, setNumResults]
  );

  useEffect( 
    () => {
      console.log("inputValue =", inputValue);
      const fixedNum = fixNumResults(inputValue);
      console.log("fixedNum =", fixedNum);
      // setInputValue(fixedNum.toString());
      setNumResults(fixedNum);
    }, [inputValue, setNumResults]
  );

  return (
    <div style={{marginTop: "1rem"}}>
      <p>Select the number of users  
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
            label="Number of users" variant="outlined" 
          />
        }
      />
    </div>
  );
}

export default FetcherNumResults;