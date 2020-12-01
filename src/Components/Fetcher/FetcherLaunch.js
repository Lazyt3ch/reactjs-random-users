import React, {useState} from "react";
import fetchUsers from "../Helpers/UsersFetcher.js";

function FetcherLaunch(props) {
  const [isFetching, setIsFetching] = useState(false);

  async function handleFetchUsers() {
    // console.log("handleFetchUsers button clicked")
    setIsFetching(true);
    const results = await fetchUsers(numResults);
    setIsFetching(false);
    console.log(results);
  }

  return (
    <div>
      <button onClick={handleFetchUsers} disabled={isFetching}>
          Fetch Users
      </button>
    </div>
  );
}

export default FetcherLaunch;