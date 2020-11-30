const fixNumResults = (numResults) => {
  const numResultsLowerLimit = 5;
  const numResultsUpperLimit = 1000;
  const numResultsDefault = 100;
  let numResultsToUse = numResultsDefault;
  
  if (typeof numResults === "number") {
    numResultsToUse = numResults;
  } else if (typeof numResults === "string") {
    numResultsToUse = parseInt(numResults);
  }
  
  if (numResultsToUse < numResultsLowerLimit) {
    numResultsToUse = numResultsLowerLimit;
  } else if (numResultsToUse > numResultsUpperLimit) {
    numResultsToUse = numResultsUpperLimit;
  }

  return numResultsToUse;    
}

export default fixNumResults;