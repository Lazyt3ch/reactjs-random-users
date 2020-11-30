import React, {useState} from "react";
import UsersGrid from "./Components/UsersGrid.js";
import Fetcher from "./Components/Fetcher.js";
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
      <Fetcher 
        numResultsLowerLimit={numResultsLowerLimit}
      />
      <UsersGrid numResults={numResults} properties={properties} />
    </>
  );
}

export default App;
