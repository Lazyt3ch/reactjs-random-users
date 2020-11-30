import React, {useState} from "react";
import UsersGrid from "./Components/UsersGrid.js";
import FetcherSetup from "./Components/FetcherSetup.js";
// import constants from "./constants.js";
import './App.css';

// console.log("UsersGrid =", UsersGrid);
// console.log("Fetcher =", Fetcher);

function App() {
  // const {
  //   numResultsLowerLimit,
  //   numResultsUpperLimit,
  //   numResultsDefault,
  // } = constants.fetcher;

  const [numResults, setNumResults] = useState(0);
  const [properties, setProperties] = useState("");

  return (
    <>
      <FetcherSetup />
      <UsersGrid numResults={numResults} properties={properties} />
    </>
  );
}

export default App;
