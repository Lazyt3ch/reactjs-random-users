import React from "react";
import {
  NavLink
} from "react-router-dom";

function Nav(props) {
  const navLinkStyle = {
    textDecoration: "none",
  };

  return (
    <nav>
      <ul className="nav-ul">
        <li>
          <NavLink 
            to="/get" 
            style={navLinkStyle}
            activeClassName="nav-link-active"
          >
            Data Retriever
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/view" 
            style={navLinkStyle}
            activeClassName="nav-link-active"
          >
            Data Viewer
          </NavLink>
        </li>

        <li>
          <NavLink 
            exact to="/" 
            style={navLinkStyle}
            activeClassName="nav-link-active"
          >
            Home Page
          </NavLink>        
        </li>

      </ul>
    </nav>
  );
}

export default Nav;