import constants from "../constants.js";

const fixNumResults = (numResults) => {
  console.log("numResults, typeof =", numResults, typeof numResults)
  const {
    numResultsLowerLimit,
    numResultsUpperLimit,
    numResultsDefault,
  } = constants;
  console.log("numResultsLowerLimit =", numResultsLowerLimit)

  let numResultsToUse = numResultsDefault;

  if (typeof numResults === "string") {
    if (numResults === "") {
      numResultsToUse = 1;
      console.log("numResults = 1")
    } else {
      numResultsToUse = parseInt(numResults);
      if (isNaN(numResults)) {
        numResultsToUse = numResultsDefault;
      }
    }
  } else if (Number.isInteger(numResults)) {
    numResultsToUse = numResults;
  } 

  console.log("numResultsToUse =", numResultsToUse)

  if (numResultsToUse < numResultsLowerLimit) {
    numResultsToUse = numResultsLowerLimit;
  } else if (numResultsToUse > numResultsUpperLimit) {
    numResultsToUse = numResultsUpperLimit;
  }
  console.log("LIMIT FIXED: numResultsToUse =", numResultsToUse)

  return numResultsToUse;    
}

export default fixNumResults;