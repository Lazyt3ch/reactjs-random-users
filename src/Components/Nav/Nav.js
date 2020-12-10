import React from "react";
import {
  NavLink
} from "react-router-dom";

function Nav(props) {
  // const navLinkStyle = {
  //   textDecoration: "none",
  //   backgroundColor: "#EEEEEE",
  //   padding: ".5rem",
  // };

  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <li>
          <NavLink 
            to="/get" 
            // style={navLinkStyle}
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Data Retriever
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/view" 
            // style={navLinkStyle}
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Data Viewer
          </NavLink>
        </li>

        <li>
          <NavLink 
            exact to="/" 
            // style={navLinkStyle}
            className="nav-link"
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