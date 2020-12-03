import React, {useState} from "react";
import fetchUsers from "../../Helpers/UsersFetcher.js";
import {useHistory} from "react-router-dom";

function FetcherLaunch(props) {
  const {
    numResults, 
    validProperties, 
    setResults,
  } = props;

  const [isFetching, setIsFetching] = useState(false);
  const [fetchAttempted, setFetchAttempted] = useState(false);
  const [messageAfterFetch, setMessageAfterFetch] = useState("");
  
  const history = useHistory();

  async function handleFetchUsers() {
    setIsFetching(true);
    const { results, error } = await fetchUsers(numResults, validProperties);
    setIsFetching(false);
    
    console.log(results);

    if (results) {
      setResults(results);
      setFetchAttempted(true);
      setMessageAfterFetch("Users data have been retrieved. Switching to Dava Viewer...");
      setTimeout( () => {
        history.push("view");
        setFetchAttempted(false);
        setMessageAfterFetch("");
      }, 2000 );
    } else {
      setMessageAfterFetch(error);
      setTimeout( () => {
        setFetchAttempted(false);
        setMessageAfterFetch("");
      }, 5000 );
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
          ? {messageAfterFetch}
          : validProperties.length 
            ? "You can request users data now." 
            : "Select at least one user property."
        }
      </p>
    </div>
  );
}

export default FetcherLaunch;