import React from "react";

import FetcherNumResults from "./FetcherNumResults";
import FetcherProperties from "./FetcherProperties";
import FetcherLaunch from "./FetcherLaunch";
import PropTypes from "prop-types";

import {DeepObj} from "./../../Helpers/dataRebuilder";

interface Props {
    // FetcherNumResults:
    numResults: number;
    setNumResults: React.SetStateAction<number>;

    // FetcherProperties:
    allProperties: string[];

    statuses: [string, boolean][];
    setStatuses: React.SetStateAction<[string, boolean][]>;
    
    validProperties: string[];
    setValidProperties: React.SetStateAction<string[]>;
    
    // FetcherLaunch:
    results: DeepObj[];
    setResults: React.SetStateAction<DeepObj[]>;

    resultsFetchCount: number;
    setResultsFetchCount: React.SetStateAction<number>;

    setActivePageNumber: React.SetStateAction<number>;
}

function Fetcher(props: Props) {
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
