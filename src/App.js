import React, {useState} from "react";
import Fetcher from "./Components/Fetcher/Fetcher.js";
import UsersGrid from "./Components/UsersGrid.js";
import './App.css';

function App() {
  // const [numResults, setNumResults] = useState(0);
  // const [properties, setProperties] = useState("");
  // const [results, setResults] = useState({});
  const [results, setResults] = useState([]);

  return (
    <>
      <Fetcher />
      <UsersGrid results={results} />
    </>
  );
}

export default App;
