import React from "react";

import FetcherNumResults from "./FetcherNumResults.js";
import FetcherProperties from "./FetcherProperties.js";
import FetcherLaunch from "./FetcherLaunch.js";
import PropTypes from "prop-types";

function Fetcher(props) {
  const {
    // FetcherNumResults:
    numResults, 
    setNumResults,

    // FetcherProperties:
    allProperties,

    statuses,
    setStatuses,
    
    validProperties,
    setValidProperties,
    
    // FetcherLaunch:
    results, 
    setResults,

    resultsFetchCount, 
    setResultsFetchCount,

    // setValidPropertiesCopy,

    setActivePageNumber,
  } = props;


  return (
    <div className="fetcher">
      <FetcherNumResults 
        numResults={numResults} 
        setNumResults={setNumResults}
      />
      
      <FetcherProperties 
        allProperties={allProperties}

        statuses={statuses}
        setStatuses={setStatuses}
        
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

        // setValidPropertiesCopy={setValidPropertiesCopy}

        setActivePageNumber={setActivePageNumber}
      />
    </div>
  );
}

Fetcher.propTypes = {
    // FetcherNumResults:
    numResults: PropTypes.number.isRequired,
    setNumResults: PropTypes.func.isRequired,

    // FetcherProperties:
    allProperties: PropTypes.array.isRequired,

    statuses: PropTypes.object.isRequired,
    setStatuses: PropTypes.func.isRequired,
    
    validProperties: PropTypes.array.isRequired,
    setValidProperties: PropTypes.func.isRequired,
    
    // FetcherLaunch:
    results: PropTypes.array.isRequired,
    setResults: PropTypes.func.isRequired,

    resultsFetchCount: PropTypes.number,
    setResultsFetchCount: PropTypes.func,

    setActivePageNumber: PropTypes.func.isRequired,
};

export default Fetcher;
