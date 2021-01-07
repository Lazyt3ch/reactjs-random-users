import React, {useState, useEffect} from "react";

import Scroller from './Components/Scroller/Scroller';
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Fetcher from "./Components/Fetcher/Fetcher";
import UsersGrid from "./Components/UserGrid/UsersGrid";

import getRebuiltResults, {DeepObj} from "./Helpers/dataRebuilder";
import isNonEmptyArray from "./Helpers/badDataChecker";

import constants from "./constants";

import { 
  getAllProperties, 
  getUpdatedStatuses,
  getValidProperties,
} from "./Helpers/propertiesFixer";

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const {numResultsDefault} = constants;
  const [numResults, setNumResults] = useState<number>(numResultsDefault);

  const allProperties = getAllProperties();

  const [statuses, setStatuses] = useState<[string, boolean][]>(getUpdatedStatuses(allProperties, false));
  const [validProperties, setValidProperties] = useState<string[]>(getValidProperties(statuses));

  const [results, setResults] = useState<DeepObj[]>([]);

  const [results2D, setResults2D] = useState<string[][]>([]);
  const [gridColumnsFormula, setGridColumnsFormula] = useState<string>("");
  const [isBriefResults, setIsBriefResults] = useState<boolean>(false);
  const [resultsFetchCount, setResultsFetchCount] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [activePageNumber, setActivePageNumber] = useState<number>(0);
  const [scrollTopArr, setScrollTopArr] = useState<number[]>([]);

  const [prevPagePath, setPrevPagePath] = useState<string>("");

  useEffect( () => {
    if (!isNonEmptyArray(results)) {
      return;
    }

    const results2DNew = results.length
      ? getRebuiltResults(results, validProperties)
      : [];

    if (isNonEmptyArray(results2DNew) && results2DNew.length) {
      setResults2D(results2DNew);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results, setResults2D]);


  useEffect( () => {
    const {usersPerPage} = constants;

    // Row 0 is used for table header, so content rows numbering starts from 1
    const totalUsers = results.length; 
    const totalPagesNew = Math.ceil(totalUsers / usersPerPage);
    setTotalPages(totalPagesNew);  
  }, [results, setTotalPages]);
  
  
  useEffect( () => {
    if (!totalPages && isNonEmptyArray(results)) {
      return;
    }

    const scrollTopArrNew: number[] = new Array(totalPages).fill(0);
    setScrollTopArr(scrollTopArrNew);
  }, [totalPages, results, setScrollTopArr]);


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
              numResults={numResults}
              setNumResults={setNumResults}

              allProperties={allProperties}
              
              statuses={statuses}
              setStatuses={setStatuses}
              
              validProperties={validProperties}
              setValidProperties={setValidProperties}
              
              results={results}
              setResults={setResults}

              resultsFetchCount={resultsFetchCount}
              setResultsFetchCount={setResultsFetchCount}

              setActivePageNumber={setActivePageNumber}
            />
          </Route>

          <Route path="/view/">
            <UsersGrid 
              // results={results} 
              // resultsFetchCount={resultsFetchCount}

              results2D={results2D} 
              // setResults2D={setResults2D} 

              gridColumnsFormula={gridColumnsFormula}
              setGridColumnsFormula={setGridColumnsFormula}

              isBriefResults={isBriefResults}
              setIsBriefResults={setIsBriefResults}

              activePageNumber={activePageNumber}
              setActivePageNumber={setActivePageNumber}
              
              totalPages={totalPages}
              // setTotalPages={setTotalPages}

              scrollTopArr={scrollTopArr}
              setScrollTopArr={setScrollTopArr}             
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
