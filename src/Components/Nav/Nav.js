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

      // <ul className="nav-ul">
      //   <li>
      //     <NavLink 
      //       to="/get" 
      //       className="nav-link unselectable"
      //       activeClassName="nav-link-active"
      //     >
      //       Data Retriever
      //     </NavLink>
      //   </li>

      //   <li>
      //     <NavLink 
      //       to={`/view/${activePageNumber + 1}`} 
      //       className="nav-link unselectable"
      //       activeClassName="nav-link-active"
      //     >
      //       Data Viewer
      //     </NavLink>
      //   </li>

      //   <li>
      //     <NavLink 
      //       exact to="/" 
      //       className="nav-link unselectable"
      //       activeClassName="nav-link-active"
      //     >
      //       Home Page
      //     </NavLink>        
      //   </li>

      // </ul>
    // </nav>
  );
}

export default Nav;