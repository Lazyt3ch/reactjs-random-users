import {React} from "react";
import {NavLink} from "react-router-dom";
import {AppBar} from '@material-ui/core';

function Nav(props) {
  const {activePageNumber} = props;

  return (
    <>
      <AppBar position="fixed">
        <div className="nav-container">
          <NavLink 
            to="/get" exact
            className="nav-link"
            activeClassName="nav-link-active" 
          >
            Data Retriever
            </NavLink>

          <NavLink
            to={`/view/${activePageNumber + 1}`} exact
            className="nav-link"
            activeClassName="nav-link-active" 
          >
            Data Viewer
          </NavLink>

          <NavLink 
            to="/" exact
            className="nav-link"
            activeClassName="nav-link-active" 
          >
            Home Page
          </NavLink>  
        </div>
      </AppBar>



      {/* <nav className="nav-container">
        <ListItem button component={NavLink} 
          to="/get" exact
          activeClassName="Mui-selected" 
        >
          Data Retriever
        </ListItem>

        <ListItem button component={NavLink} 
          to={`/view/${activePageNumber + 1}`} 
          activeClassName="Mui-selected" 
        >
          Data Viewer
        </ListItem>

        <ListItem button component={NavLink} 
          to="/" exact
          activeClassName="Mui-selected" 
        >
          Home Page
        </ListItem>        
      </nav>     */}
    </>
  );
}

export default Nav;