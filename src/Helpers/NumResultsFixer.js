const fixNumResults = (numResults) => {
  const numResultsLowerLimit = 5;
  const numResultsUpperLimit = 1000;
  const numResultsDefault = 50;

  let numResultsToUse = numResultsDefault;
  
  if (Number.isInteger(numResults)) {
    numResultsToUse = numResults;
    if (numResultsToUse < numResultsLowerLimit) {
      numResultsToUse = numResultsLowerLimit;
    } else if (numResultsToUse > numResultsUpperLimit) {
      numResultsToUse = numResultsUpperLimit;
    }
  }  

  return numResultsToUse;    
}

export default fixNumResults;