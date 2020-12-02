import React from "react";
import {
  Link
} from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">Get Users Data</Link>
        </li>

        <li>
          <Link to="/show">Display Users Data</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;