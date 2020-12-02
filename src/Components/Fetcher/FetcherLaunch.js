import React, {useState} from "react";
import fetchUsers from "../../Helpers/UsersFetcher.js";
import {useHistory} from "react-router-dom";

function FetcherLaunch(props) {
  const {numResults, validProperties, setResults} = props;
  const [isFetching, setIsFetching] = useState(false);
  const [dataRetrieved, setDataRetrieved] = useState(false);
  const history = useHistory();

  async function handleFetchUsers() {
    setIsFetching(true);
    const resultsNew = await fetchUsers(numResults, validProperties);
    setIsFetching(false);
    console.log(resultsNew);
    if (resultsNew) {
      setResults(resultsNew);
      setDataRetrieved(true);
      setTimeout( () => {
        history.push("view");
        setDataRetrieved(false);
      }, 2000 );
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

      <p style={ dataRetrieved ? {color: "blue", textWeight: 700} : null }>
        { dataRetrieved
          ? "Users data has been retrieved. Switching to Dava Viewer..."
          : validProperties.length 
            ? "You can request users data now." 
            : "Select at least one user property."
        }
      </p>
    </div>
  );
}

export default FetcherLaunch;