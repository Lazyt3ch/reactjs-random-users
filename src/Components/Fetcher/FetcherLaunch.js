import React, {useState} from "react";
import fetchUsers from "../../Helpers/UsersFetcher.js";

function FetcherLaunch(props) {
  const {numResults, validProperties} = props;
  const [isFetching, setIsFetching] = useState(false);

  async function handleFetchUsers() {
    setIsFetching(true);
    const results = await fetchUsers(numResults, validProperties);
    setIsFetching(false);
    console.log(results);
  }

  return (
    <div style={{marginLeft: "2rem"}}>
      <button 
        onClick={handleFetchUsers} 
        disabled={isFetching || !validProperties.length}
      >
        Fetch Users
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