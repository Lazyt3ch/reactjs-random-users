import React, {useState} from "react";
import fetchUsers from "../../Helpers/UsersFetcher.js";
import {useHistory} from "react-router-dom";

function FetcherLaunch(props) {
  const {
    numResults, 

    validProperties, 
    setValidPropertiesCopy,
    
    setResults,
    
    resultsFetchCount, 
    setResultsFetchCount,

    setActivePageNumber,
  } = props;

  const [isFetching, setIsFetching] = useState(false);
  const [fetchAttempted, setFetchAttempted] = useState(false);
  const [messageAfterFetch, setMessageAfterFetch] = useState("");
  
  const history = useHistory();

  async function handleFetchUsers() {    
    if (numResults < 1 || validProperties < 1) {
      return;
    }

    setIsFetching(true);
    const { resultsArr, errorMessage } = await fetchUsers(numResults, validProperties);
    setIsFetching(false);
    setFetchAttempted(true);

    if (!errorMessage && resultsArr && Array.isArray(resultsArr) && resultsArr.length) {
      setValidPropertiesCopy(validProperties.slice());
      setResults(resultsArr);
      setMessageAfterFetch("Users data retrieval is complete. Switching to Dava Viewer...");
      setResultsFetchCount(resultsFetchCount + 1);

      // Important, otherwise no rows will be displayed in certain cases
      setActivePageNumber(0);

      setTimeout( () => {
        history.push("view");
        setFetchAttempted(false);
        setMessageAfterFetch("");
      }, 2000 );
    } else {
      setMessageAfterFetch(errorMessage);
      setTimeout( () => {
        setFetchAttempted(false);
        setMessageAfterFetch("");
      }, 3000 );
    }
  }

  return (
    <div>
      <button 
        onClick={handleFetchUsers} 
        disabled={isFetching || !validProperties.length}
      >
        Retrieve users data
      </button>

      <p style={ fetchAttempted ? {fontWeight: 700} : null }>
        { isFetching 
          ? "Trying to retrieve users data..."
          : fetchAttempted
            ? messageAfterFetch.length 
              ? messageAfterFetch 
              : "An error occurred."
            : validProperties.length 
              ? "You can request users data now." 
              : "Select at least one user property."
        }
      </p>
    </div>
  );
}

export default FetcherLaunch;