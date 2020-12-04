import React, {useState} from "react";

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

  const [results, setResults] = useState([]);

  const [gridColumnsFormula, setGridColumnsFormula] = useState([]);
  const [displayedResults, setDisplayedResults] = useState([]);

  return (
    <Router>
      <Nav />
      
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
          />
        </Route>

        <Route path="/view" exact>
          <UsersGrid 
            validProperties={validProperties}

            results={results} 
            
            gridColumnsFormula={gridColumnsFormula}
            setGridColumnsFormula={setGridColumnsFormula}
            
            displayedResults={displayedResults}
            setDisplayedResults={setDisplayedResults}
          />
        </Route>

        <Route path="/" exact>
          {/* The slash-only path must always be the last one, or navigation will not work!
              Alternatively, add `exact` directive to Route. */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
