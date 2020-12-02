import React, {useState} from "react";
import Nav from "./Components/Nav/Nav.js";
import Home from "./Components/Home/Home.js";
import Fetcher from "./Components/Fetcher/Fetcher.js";
import UsersGrid from "./Components/UserGrid/UsersGrid.js";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [results, setResults] = useState([]);

  return (
    <Router>
      <Nav />
      
      <Switch>
        <Route path="/get">
          <Fetcher 
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
          {/* The slash-only path must always be the last one, or navigation will not work! */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
