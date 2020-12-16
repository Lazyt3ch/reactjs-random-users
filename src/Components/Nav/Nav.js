import {React} from "react";
import {NavLink} from "react-router-dom";
// import {React, useEffect} from "react";
// import {NavLink, useHistory} from "react-router-dom";

function Nav(props) {
  const {activePageNumber} = props;

  // const history = useHistory();  

  // useEffect(() => {
  //   return history.listen((location) => { 
  //      console.log(`You changed the page to: ${location.pathname}`) 
  //   }) 
  // }, [history]);


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
            to={`/view/${activePageNumber + 1}`} 
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