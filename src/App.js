import React, {useState} from "react";
import Fetcher from "./Components/Fetcher/Fetcher.js";
import UsersGrid from "./Components/UserGrid/UsersGrid.js";
import './App.css';

function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <Fetcher 
        results={results}
        setResults={setResults}
      />

      <UsersGrid 
        results={results} 
      />

      {/*
      <div>
        <p>DEBUG INFO:</p>
        {results.map( user => <div key={user.name.first + user.name.last}>{user.name.first}</div> )}
      </div>
      */}

    </>
  );
}

export default App;
