import React, {useState, useEffect} from "react";
import constants from "../../constants";
import fixNumResults from "../../utils/numResultsFixer";
import {TextField} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';
import PropTypes from "prop-types";

import store from "../../redux/store";
import actionTypes from "../../redux/actionTypes";
import {useSelector, useDispatch} from 'react-redux';

interface Props {
  numResults: number;
  setNumResults: React.Dispatch<React.SetStateAction<number>>;
}

function FetcherNumResults(props: Props) {
  const {
    numResults,
    setNumResults,
  } = props;

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

  const [value, setValue] = useState<number>(numResults || numResultsDefault);
  const [inputValue, setInputValue] = useState<string>((numResults || numResultsDefault).toString());

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

FetcherNumResults.propTypes = {
  numResults: PropTypes.number.isRequired,
  setNumResults: PropTypes.func.isRequired,
};

export default FetcherNumResults;