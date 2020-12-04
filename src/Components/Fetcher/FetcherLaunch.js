import React, {useState} from "react";
import fetchUsers from "../../Helpers/UsersFetcher.js";
import {useHistory} from "react-router-dom";

function FetcherLaunch(props) {
  const {
    numResults, 

    validProperties, 
    
    setResults,
    
    resultsFetchCount, 
    setResultsFetchCount,
  } = props;

  const [isFetching, setIsFetching] = useState(false);
  const [fetchAttempted, setFetchAttempted] = useState(false);
  const [messageAfterFetch, setMessageAfterFetch] = useState("");
  
  const history = useHistory();

  async function handleFetchUsers() {    
    setIsFetching(true);
    const { resultsArr, errorMessage } = await fetchUsers(numResults, validProperties);
    setIsFetching(false);
    setFetchAttempted(true);

    if (resultsArr && resultsArr.length) {
      setResults(resultsArr);
      setMessageAfterFetch("Users data retrieval is complete. Switching to Dava Viewer...");
      setResultsFetchCount(resultsFetchCount + 1);
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
    <div style={{marginLeft: "2rem"}}>
      <button 
        onClick={handleFetchUsers} 
        disabled={isFetching || !validProperties.length}
      >
        Retrieve users data
      </button>

      <p style={ fetchAttempted ? {fontWeight: 700} : null }>
        { fetchAttempted
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