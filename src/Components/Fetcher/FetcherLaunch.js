import React, {useState} from "react";
import fetchUsers from "../../Helpers/UsersFetcher.js";
import {useHistory} from "react-router-dom";

function FetcherLaunch(props) {
  const {numResults, validProperties, setResults} = props;
  const [isFetching, setIsFetching] = useState(false);
  const history = useHistory();

  async function handleFetchUsers() {
    setIsFetching(true);
    const resultsNew = await fetchUsers(numResults, validProperties);
    setIsFetching(false);
    console.log(resultsNew);
    if (resultsNew) {
      setResults(resultsNew);
      history.push("view");
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

      <p>
        { validProperties.length 
          ? "Okay to fetch users data." 
          : "Select at least one user property."
        }
      </p>
    </div>
  );
}

export default FetcherLaunch;