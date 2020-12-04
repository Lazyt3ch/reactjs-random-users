import React from "react";

import FetcherNumResults from "./FetcherNumResults.js";
import FetcherProperties from "./FetcherProperties.js";
import FetcherLaunch from "./FetcherLaunch.js";

function Fetcher(props) {
  const {
    // FetcherNumResults:
    numResults, 
    setNumResults,

    // FetcherProperties:
    allProperties,

    statusesString,
    setStatusesString,
    
    validProperties,
    setValidProperties,
    
    // FetcherLaunch:
    results, 
    setResults,

    resultsFetchCount, 
    setResultsFetchCount,

  } = props;


  return (
    <div>
      <FetcherNumResults 
        numResults={numResults} 
        setNumResults={setNumResults}
      />
      
      <FetcherProperties 
        allProperties={allProperties}

        statusesString={statusesString}
        setStatusesString={setStatusesString}
        
        validProperties={validProperties}
        setValidProperties={setValidProperties}
      />
      
      <FetcherLaunch
        numResults={numResults} 
        
        validProperties={validProperties}
        
        results={results}
        setResults={setResults}

        resultsFetchCount={resultsFetchCount} 
        setResultsFetchCount={setResultsFetchCount}    
      />
    </div>
  );
}

export default Fetcher;
