import React, {useState} from "react";
import fetchUsers from "../../Helpers/UsersFetcher.js";

function FetcherLaunch(props) {
  const {numResults, properties} = props;
  const [isFetching, setIsFetching] = useState(false);
  const paramsOkay = null;
  const [isParamsOkay, setIsParamsOkay] = useState(paramsOkay);

  async function handleFetchUsers() {
    setIsFetching(true);
    const results = await fetchUsers(numResults, properties);
    setIsFetching(false);
    // console.log(results);
  }

  return (
    <div style={{marginLeft: "2rem"}}>
      <button onClick={handleFetchUsers} disabled={isFetching}>
        Fetch Users
      </button>

      <p>
        {paramsOkay? "Select at least one user property." : "Okay to fetch users data."}
      </p>
    </div>
  );
}

export default FetcherLaunch;