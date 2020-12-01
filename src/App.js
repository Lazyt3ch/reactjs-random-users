import React, {useState} from "react";
import UsersGrid from "./Components/UsersGrid.js";
import FetcherSetup from "./Components/FetcherSetup.js";
import './App.css';

function App() {
  const [numResults, setNumResults] = useState(0);
  const [properties, setProperties] = useState("");
  const [results, setResults] = useState({});

  return (
    <>
      <FetcherSetup />
      <UsersGrid numResults={numResults} properties={properties} />
    </>
  );
}

export default App;
