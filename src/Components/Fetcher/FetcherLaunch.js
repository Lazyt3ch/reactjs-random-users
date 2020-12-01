import React, {useState} from "react";
import fetchUsers from "../../Helpers/UsersFetcher.js";

function FetcherLaunch(props) {
  const {numResults, properties} = props;
  const [isFetching, setIsFetching] = useState(false);

  async function handleFetchUsers() {
    setIsFetching(true);
    const results = await fetchUsers(numResults, properties);
    setIsFetching(false);
    // console.log(results);
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