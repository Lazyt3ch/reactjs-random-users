import constants from "../constants.js";

const fixNumResults = (numResults) => {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
    numResultsDefault,
  } = constants;

  let numResultsToUse = numResultsDefault;

  if (typeof numResults === "string") {
    if (numResults === "") {
      numResultsToUse = 1;
    } else {
      numResultsToUse = parseInt(numResults);
      if (isNaN(numResults)) {
        numResultsToUse = numResultsDefault;
      }
    }
  } else if (Number.isInteger(numResults)) {
    numResultsToUse = numResults;
  } 

  if (numResultsToUse < numResultsLowerLimit) {
    numResultsToUse = numResultsLowerLimit;
  } else if (numResultsToUse > numResultsUpperLimit) {
    numResultsToUse = numResultsUpperLimit;
  }
  
  return numResultsToUse;    
}

export default fixNumResults;