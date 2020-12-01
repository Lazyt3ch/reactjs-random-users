import React, {useState} from "react";
import FetcherSetup from "./Components/FetcherSetup.js";
import FetcherSetup2 from "./Components/FetcherSetup2.js";
import UsersGrid from "./Components/UsersGrid.js";
import './App.css';

function App() {
  const [numResults, setNumResults] = useState(0);
  const [properties, setProperties] = useState("");
  // const [results, setResults] = useState({});

  return (
    <>
      <FetcherSetup />
      <FetcherSetup2 />
      <UsersGrid numResults={numResults} properties={properties} />
    </>
  );
}

export default App;
