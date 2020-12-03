import React, {useState} from "react";

import Nav from "./Components/Nav/Nav.js";
import Home from "./Components/Home/Home.js";
import Fetcher from "./Components/Fetcher/Fetcher.js";
import UsersGrid from "./Components/UserGrid/UsersGrid.js";

import constants from "./constants.js";

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const {numResultsDefault} = constants;
  const [numResults, setNumResults] = useState(numResultsDefault);

  const [results, setResults] = useState([]);

  return (
    <Router>
      <Nav />
      
      <Switch>
        <Route path="/get">
          <Fetcher 
            numResults={numResults}
            setNumResults={setNumResults}
            results={results}
            setResults={setResults}
          />
        </Route>

        <Route path="/view">
          <UsersGrid 
            results={results} 
          />
        </Route>

        <Route path="/">
          {/* The slash-only path must always be the last one, or navigation will not work!
              Alternatively, add `exact` directive to Route. */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
