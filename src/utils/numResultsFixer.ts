import constants from "../constants";

const fixNumResults = (numResults: number | string | null | undefined): number => {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
    numResultsDefault,
  } = constants;

  let numResultsToUse = numResultsDefault;

  if (numResults === null || numResults === undefined) {
    numResultsToUse = 0;
  } else if (typeof(numResults) === "string") {
    if (numResults === "") {
      numResultsToUse = 1;
    } else {
      numResultsToUse = parseInt(numResults);
      if (isNaN(numResultsToUse)) {
        numResultsToUse = numResultsDefault;
      }
    }
  } else if (typeof(numResults) === "number") {
    numResultsToUse = Math.floor(numResults);
  } 

  if (numResultsToUse < numResultsLowerLimit) {
    numResultsToUse = numResultsLowerLimit;
  } else if (numResultsToUse > numResultsUpperLimit) {
    numResultsToUse = numResultsUpperLimit;
  }
  
  return numResultsToUse;    
}

export default fixNumResults;