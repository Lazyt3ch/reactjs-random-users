import React, {useState} from "react";

import Scroller from './Components/Scroller/Scroller.js';
import Nav from "./Components/Nav/Nav.js";
import Home from "./Components/Home/Home.js";
import Fetcher from "./Components/Fetcher/Fetcher.js";
import UsersGrid from "./Components/UserGrid/UsersGrid.js";

import constants from "./constants.js";

import { 
  getAllProperties, 
  getUpdatedStatuses,
  getValidProperties,
} from "./Helpers/PropertiesFixer.js";

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const {numResultsDefault} = constants;
  const [numResults, setNumResults] = useState(numResultsDefault);

  const allProperties = getAllProperties(constants);

  const [statusesString, setStatusesString] = useState(getUpdatedStatuses(true, allProperties));
  const [validProperties, setValidProperties] = useState(getValidProperties(statusesString));
  const [validPropertiesCopy, setValidPropertiesCopy] = useState([]);

  const [results, setResults] = useState([]);

  const [results2D, setResults2D] = useState([]);
  const [briefResults2D, setBriefResults2D] = useState([]);
  const [gridColumnsFormula, setGridColumnsFormula] = useState("");
  const [briefGridColumnsFormula, setBriefGridColumnsFormula] = useState("");
  const [isBriefResults, setIsBriefResults] = useState(false);
  const [resultsFetchCount, setResultsFetchCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(0);

  // const [scrollTop, setScrollTop] = useState(0);
  const [scrollTopArr, setScrollTopArr] = useState([]);


  return (
    <Router>
      <Nav 
      />
      
      <Scroller
        scrollTopArr={scrollTopArr}
        setScrollTopArr={setScrollTopArr}

        activePageNumber={activePageNumber} 
      >
        <Switch>
          <Route path="/get" exact>
            <Fetcher 
              numResults={numResults}
              setNumResults={setNumResults}

              allProperties={allProperties}
              
              statusesString={statusesString}
              setStatusesString={setStatusesString}
              
              validProperties={validProperties}
              setValidProperties={setValidProperties}
              
              results={results}
              setResults={setResults}

              resultsFetchCount={resultsFetchCount}
              setResultsFetchCount={setResultsFetchCount}

              setValidPropertiesCopy={setValidPropertiesCopy}

              setActivePageNumber={setActivePageNumber}
            />
          </Route>

          <Route path="/view" exact>
            <UsersGrid 
              validPropertiesCopy={validPropertiesCopy}

              results={results} 
              resultsFetchCount={resultsFetchCount}

              results2D={results2D} 
              setResults2D={setResults2D} 

              briefResults2D={briefResults2D} 
              setBriefResults2D={setBriefResults2D} 

              gridColumnsFormula={gridColumnsFormula}
              setGridColumnsFormula={setGridColumnsFormula}

              briefGridColumnsFormula={briefGridColumnsFormula}
              setBriefGridColumnsFormula={setBriefGridColumnsFormula}

              isBriefResults={isBriefResults}
              setIsBriefResults={setIsBriefResults}

              activePageNumber={activePageNumber}
              setActivePageNumber={setActivePageNumber}
              
              totalPages={totalPages}
              setTotalPages={setTotalPages}

              scrollTop={scrollTop}
              setScrollTop={setScrollTop}
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
