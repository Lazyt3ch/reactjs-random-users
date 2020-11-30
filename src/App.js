import React, {setState} from "react";
import UsersGrid from "/Components/UsersGrid.js";
import './App.css';

function App() {
  const [numResults, setNumResults] = setState(0);
  const [properties, setProperties] = setState("");
  return (
    <UsersGrid numResults={numResults} properties={properties} />
  );
}

export default App;
