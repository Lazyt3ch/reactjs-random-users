import React, {useState, useEffect} from "react";

import Scroller from './Components/Scroller/Scroller';
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Fetcher from "./Components/Fetcher/Fetcher";
import UsersGrid from "./Components/UserGrid/UsersGrid";

import isNonEmptyArray from "./utils/badDataChecker";

import constants from "./constants";

import { 
  getAllProperties, 
  getUpdatedStatuses,
  getValidProperties,
} from "./utils/propertiesFixer";

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import store, {RootState} from "./redux/store";
import actionTypes from "./redux/actionTypes";
import {useDispatch} from 'react-redux';

function App() {
  const {numResultsDefault} = constants;
  // const [numResults, setNumResults] = useState<number>(numResultsDefault);
  // store.dispatch({ type: actionTypes.NUM_RESULTS, payload: numResultsDefault });
  const dispatch = useDispatch();
  dispatch({ type: actionTypes.NUM_RESULTS, payload: numResultsDefault });

  const allProperties = getAllProperties();

  const statuses = getUpdatedStatuses(allProperties, false);

  // const [statuses, setStatuses] = useState<[string, boolean][]>(
  //   getUpdatedStatuses(allProperties, false));
  dispatch({ type: actionTypes.STATUSES, payload: statuses });

  const validProperties = getValidProperties(statuses);
  // const [validProperties, setValidProperties] = useState<string[]>(
  //   getValidProperties(statuses));
  dispatch({ type: actionTypes.VALID_PROPERTIES, payload: validProperties });

  const [results2D, setResults2D] = useState<string[][]>([]);
  const [gridColumnsFormula, setGridColumnsFormula] = useState<string>("");
  const [isBriefResults, setIsBriefResults] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  // const [activePageNumber, setActivePageNumber] = useState<number>(0);
  const [scrollTopArr, setScrollTopArr] = useState<number[]>([]);

  const [prevPagePath, setPrevPagePath] = useState<string>("");


  useEffect( () => {
    const {usersPerPage} = constants;

    // Row 0 is used for table header, so content rows numbering starts from 1
    const totalUsers = results2D.length; 
    const totalPagesNew = Math.ceil(totalUsers / usersPerPage);
    setTotalPages(totalPagesNew);  
  }, [results2D, setTotalPages]);
  
  
  useEffect( () => {
    if (!totalPages && isNonEmptyArray(results2D)) {
      return;
    }

    const scrollTopArrNew: number[] = new Array(totalPages).fill(0);
    setScrollTopArr(scrollTopArrNew);
  }, [totalPages, results2D, setScrollTopArr]);


  return (
    <Router>
      <Nav 
        activePageNumber={activePageNumber}
      />
      
      <Scroller
        scrollTopArr={scrollTopArr}
        setScrollTopArr={setScrollTopArr}

        activePageNumber={activePageNumber} 

        prevPagePath={prevPagePath} 
        setPrevPagePath={setPrevPagePath}
      >

        <Switch>
          <Route path="/get" exact>
            <Fetcher 
              // numResults={numResults}
              // setNumResults={setNumResults}

              // allProperties={allProperties}
              
              statuses={statuses}
              setStatuses={setStatuses}
              
              validProperties={validProperties}
              setValidProperties={setValidProperties}
              
              setResults2D={setResults2D}

              // setActivePageNumber={setActivePageNumber}
            />
          </Route>

          <Route path="/view/">
            <UsersGrid 
              results2D={results2D} 

              gridColumnsFormula={gridColumnsFormula}
              setGridColumnsFormula={setGridColumnsFormula}

              isBriefResults={isBriefResults}
              setIsBriefResults={setIsBriefResults}

              // activePageNumber={activePageNumber}
              // setActivePageNumber={setActivePageNumber}
              
              totalPages={totalPages}
            />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Scroller>
    </Router>
  );
}

export default App;
