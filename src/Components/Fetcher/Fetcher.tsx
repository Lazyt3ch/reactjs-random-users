import React from "react";

import FetcherNumResults from "./FetcherNumResults";
import FetcherProperties from "./FetcherProperties";
import FetcherLaunch from "./FetcherLaunch";
import PropTypes from "prop-types";

// import {DeepObj} from "./../../Helpers/dataRebuilder";

import "./Fetcher.css";


interface Props {
  // FetcherNumResults:
  numResults: number;
  setNumResults: React.Dispatch<React.SetStateAction<number>>;

  // FetcherProperties:
  allProperties: string[];

  statuses: [string, boolean][];
  setStatuses: React.Dispatch<React.SetStateAction<[string, boolean][]>>;
  
  validProperties: string[];
  setValidProperties: React.Dispatch<React.SetStateAction<string[]>>;
  
  // FetcherLaunch:
  // setResults: React.Dispatch<React.SetStateAction<DeepObj[]>>;
  setResults2D: React.Dispatch<React.SetStateAction<string[][]>>;

  setActivePageNumber: React.Dispatch<React.SetStateAction<number>>;
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
    // setResults,
    setResults2D,

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
        
        setValidProperties={setValidProperties}
      />
      
      <FetcherLaunch
        numResults={numResults} 
        
        validProperties={validProperties}
        
        // setResults={setResults}
        setResults2D={setResults2D}

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

    statuses: PropTypes.array.isRequired,
    setStatuses: PropTypes.func.isRequired,
    
    validProperties: PropTypes.array.isRequired,
    setValidProperties: PropTypes.func.isRequired,
    
    // FetcherLaunch:
    setResults: PropTypes.func.isRequired,

    setActivePageNumber: PropTypes.func.isRequired,
};

export default Fetcher;
