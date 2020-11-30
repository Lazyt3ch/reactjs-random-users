import React from "react";
import constants from "../constants.js";

function Fetcher(props) {
  return (
    <div>
      <label for="num_results">
        <input type="range" id="num_results" name="num_results" />
      </label>
    </div>
  );
}

export default Fetcher;