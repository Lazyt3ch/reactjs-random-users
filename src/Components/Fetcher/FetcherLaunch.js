import React, {useState, useEffect} from "react";
import fetchUsers from "../../Helpers/UsersFetcher.js";
import {useHistory} from "react-router-dom";
import SpacedButton from "../SpacedButton/SpacedButton.js";
import {Alert} from '@material-ui/lab';

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

  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  useEffect(
    () => {
      if (isFetching) {
        setMessage("Trying to retrieve users data...");
        setSeverity("info");
      } else {
        if (fetchAttempted) {
          if (messageAfterFetch.length) {
            setMessage("Trying to retrieve users data...");
            setSeverity("success");
          } else {
            setMessage("An error occurred.");
            setSeverity("error");
          }
        } else {
          if (validProperties.length) {
            setMessage("You can request users data now.");
            setSeverity("info");
          } else {
            setMessage("Select at least one user property.");
            setSeverity("warning");
          }
        }
      }
    },
    [isFetching, fetchAttempted, messageAfterFetch, validProperties]
  );


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
      setActivePageNumber(0); // 0 is first page's index

      setTimeout( () => {
        history.push("/view/1"); // 1 is first page's displayed number
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
    <>
      <SpacedButton variant="contained"
        color="secondary"
        m="5px"
        onClick={handleFetchUsers} 
        disabled={isFetching || !validProperties.length}
      >
        Retrieve data
      </SpacedButton>

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

      {message.length && 
        <Alert severity={severity}>
          {message}
        </Alert>                
      }
    </>
  );
}

export default FetcherLaunch;