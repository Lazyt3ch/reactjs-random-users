import React, {useState, useEffect} from "react";
import fetchUsers from "../../utils/usersFetcher";
import isNonEmptyArray from "../../utils/badDataChecker";
import {useHistory} from "react-router-dom";
import SpacedButton from "../SpacedButton/SpacedButton";
import {Alert} from '@material-ui/lab';

import {RootState} from "../../redux/store";
import actionTypes from "../../redux/actionTypes";
import {useSelector, useDispatch} from 'react-redux';

import {clear} from "redux-localstorage-simple";

type Severity = "success" | "error" | "info" | "warning" | undefined;

function FetcherLaunch() {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [fetchAttempted, setFetchAttempted] = useState<boolean>(false);
  const [messageAfterFetch, setMessageAfterFetch] = useState<string>("");
  
  const history = useHistory();

  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<Severity>(undefined);

  const dispatch = useDispatch();

  const numResults = useSelector((state: RootState) => state.numResults);
  const validProperties = useSelector((state: RootState) => state.validProperties);

  useEffect(
    () => {
      if (isFetching) {
        setMessage("Trying to retrieve users data...");
        setSeverity("info");
      } else {
        if (fetchAttempted) {
          if (messageAfterFetch.length) {
            setMessage(messageAfterFetch);
          } else {
            setMessage("An error occurred.");
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
    if (numResults < 1 || validProperties.length < 1) {
      return;
    }

    setIsFetching(true);
    const { results2D, errorMessage } = await fetchUsers(numResults, validProperties);
    setIsFetching(false);
    setFetchAttempted(true);

    if (!errorMessage && results2D !== undefined && isNonEmptyArray(results2D)) {
      dispatch({ type: actionTypes.RESULTS_2D, payload: results2D });
      setMessageAfterFetch("Users data retrieval is complete. Switching to Dava Viewer...");
      setSeverity("success");

      // Important, otherwise no rows will be displayed in certain cases
      dispatch({ type: actionTypes.ACTIVE_PAGE_NUMBER, payload: 0 }); // 0 is first page's index

      setTimeout( () => {
        history.push("/view/1"); // 1 is first page's displayed number
        setFetchAttempted(false);
        setMessageAfterFetch("");
        setSeverity("info");
      }, 2000 );
    } else if (errorMessage) {
      setMessageAfterFetch(errorMessage);
      setSeverity("error");
      setTimeout( () => {
        setFetchAttempted(false);
        setMessageAfterFetch("");
        setSeverity("info");
      }, 3000 );
    }
  }

  function handleClearCache() {    
    setMessage("Now all the data will be deleted, and the Home page will open...");
    setSeverity("info");
    clear();
    setTimeout( () => {
      // history.push("/");
      setTimeout( () => {
        window.location.reload();
      }, 200);      
    }, 3000);
  }

  return (
    <>
      {message.length && 
        <Alert severity={severity}
          variant="filled"
          style={{width: "35rem"}} 
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

      <SpacedButton variant="contained"
        color="secondary"
        mt="15px"
        ml="30px"
        onClick={handleClearCache} 
      >
        Reset all data
      </SpacedButton>           
    </>
  );
}

export default FetcherLaunch;