import {React} from "react";
import {NavLink} from "react-router-dom";
import {ListItem} from '@material-ui/core';

function Nav(props) {
  const {activePageNumber} = props;

  return (
    <nav className="nav-container">
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
    </nav>    
  );
}

export default Nav;