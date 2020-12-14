import {React, useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";

function Nav(props) {
  let location = useLocation();
  // console.log("location =", location);

  useEffect(
    () => {
      const linkNames = {
        "/get": "Data Retriever",
        "/view": "Data Viewer",
        "/": "Home Page",
      };      
      document.title = `Random Users — ${ linkNames[location.pathname] }`;
    },
    [location]
  )

  return (
    <nav className="nav-container">
      <ul className="nav-ul unselectable">
        <li>
          <NavLink 
            to="/get" 
            className="nav-link unselectable"
            activeClassName="nav-link-active"
          >
            Data Retriever
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/view" 
            className="nav-link unselectable"
            activeClassName="nav-link-active"
          >
            Data Viewer
          </NavLink>
        </li>

        <li>
          <NavLink 
            exact to="/" 
            className="nav-link unselectable"
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