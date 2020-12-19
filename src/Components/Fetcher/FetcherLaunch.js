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
            setMessage(messageAfterFetch);
            // setSeverity("success");
          } else {
            setMessage("An error occurred.");
            // setSeverity("error");
          }
        } else {
          if (validProperties.length) {
            setMessage("You can request data now.");
            setSeverity("info");
          } else {
            setMessage("Select at least one user property.");
            setSeverity("warning");
          }
        }
      }
    },
    [isFetching, fetchAttempted, messageAfterFetch, validProperties.length]
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
      setSeverity("success");
      setResultsFetchCount(resultsFetchCount + 1);

      // Important, otherwise no rows will be displayed in certain cases
      setActivePageNumber(0); // 0 is first page's index

      setTimeout( () => {
        history.push("/view/1"); // 1 is first page's displayed number
        setFetchAttempted(false);
        setMessageAfterFetch("");
        setSeverity("info");
      }, 2000 );
    } else {
      setMessageAfterFetch(errorMessage);
      setSeverity("error");
      setTimeout( () => {
        setFetchAttempted(false);
        setMessageAfterFetch("");
        setSeverity("info");
      }, 3000 );
    }
  }

  return (
    <>
      {message.length && 
        <Alert severity={severity}
          variant="filled"
          style={{width: "30rem"}} 
        >
          {message}
        </Alert>                
      }

      <SpacedButton variant="contained"
        color="primary"
        mt="15px"
        onClick={handleFetchUsers} 
        disabled={isFetching || !validProperties.length}
      >
        Retrieve data
      </SpacedButton>      
    </>
  );
}

export default FetcherLaunch;