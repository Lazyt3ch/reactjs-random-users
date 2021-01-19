import React from "react";

import FetcherNumResults from "./FetcherNumResults";
import FetcherProperties from "./FetcherProperties";
import FetcherLaunch from "./FetcherLaunch";

import "./Fetcher.css";

function Fetcher() {
  return (
    <div className="fetcher">
      <FetcherNumResults />
      <FetcherProperties />
      <FetcherLaunch />
    </div>
  );
}

export default Fetcher;
