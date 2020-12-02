import React from "react";
import {
  Link
} from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/home">Home page</Link>
        </li>

        <li>
          <Link to="/get">Data getter</Link>
        </li>

        <li>
          <Link to="/view">Data viewer</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;