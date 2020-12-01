import React, {useState} from "react";
import fetchUsers from "../../Helpers/UsersFetcher.js";
// import fixProperties from "../../Helpers/PropertiesFixer.js";

function FetcherLaunch(props) {
  // const {numResults, statusesString} = props;
  const {numResults, validProperties} = props;
  const [isFetching, setIsFetching] = useState(false);

  // const getValidProperties = () => {
  //   if (statusesString.length < 5) {
  //     return [];
  //   }

  //   const selectedProperties = Object.entries(JSON.parse(statusesString))
  //     .filter( ([_, value]) => value === true )
  //     .map( ([key, value]) => key );
    
  //   return fixProperties(selectedProperties);
  // };

  // const [validProperties, setValidProperties] = useState(getValidProperties());

  async function handleFetchUsers() {
    setIsFetching(true);
    // const results = await fetchUsers(numResults, statusesString);
    const results = await fetchUsers(numResults, validProperties);
    setIsFetching(false);
    // console.log(results);
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