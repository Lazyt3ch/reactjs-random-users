import React, {useState, useEffect} from "react";
import constants from "../../constants";
import fixNumResults from "../../utils/numResultsFixer";
import {TextField} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';

import {RootState} from "../../redux/store";
import actionTypes from "../../redux/actionTypes";
import {useSelector, useDispatch} from 'react-redux';

function FetcherNumResults() {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
    numResultsDefault,
  } = constants;

  const options = [
    20,
    50,
    100,
    200,
    500,
    1000,
  ];

  const numResults = useSelector((state: RootState) => state.numResults);
  const [value, setValue] = useState<number>(numResults || numResultsDefault);
  const [inputValue, setInputValue] = useState<string>((numResults || numResultsDefault).toString());

  const dispatch = useDispatch();

  useEffect( 
    () => {
      const fixedNum = fixNumResults(value);
      setValue(fixedNum);
      dispatch({ type: actionTypes.NUM_RESULTS, payload: fixedNum });
    }, [value, dispatch]
  );

  useEffect( 
    () => {
      const fixedNum = fixNumResults(inputValue);
      setInputValue(fixedNum.toString());
      dispatch({ type: actionTypes.NUM_RESULTS, payload: fixedNum });
    }, [inputValue, dispatch]
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
        onChange={(event, valueNew) => setValue(fixNumResults(valueNew))}
        onInputChange={(event, inputValueNew) => 
          setInputValue(fixNumResults(inputValueNew).toString())}
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