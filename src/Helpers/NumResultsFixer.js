import constants from "../constants.js";

const fixNumResults = (numResults) => {
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
    numResultsDefault,
  } = constants.fetcher;

  let numResultsToUse = numResultsDefault;

  if (typeof numResults === "string") {
    numResultsToUse = parseInt(numResults);
  } else if (Number.isInteger(numResults)) {
    numResultsToUse = numResults;
  } 

  console.log("numResultsToUse =", numResultsToUse)

  if (numResultsToUse < numResultsLowerLimit) {
    numResultsToUse = numResultsLowerLimit;
  } else if (numResultsToUse > numResultsUpperLimit) {
    numResultsToUse = numResultsUpperLimit;
  }

  return numResultsToUse;    
}

export default fixNumResults;