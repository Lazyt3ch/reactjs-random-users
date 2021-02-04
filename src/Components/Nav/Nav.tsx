import React from "react";
import {NavLink} from "react-router-dom";
import {AppBar} from '@material-ui/core';
import "./Nav.css";

import {RootState} from "../../redux/store";
import {useSelector} from 'react-redux';

function Nav() {
  const activePageNumber = useSelector((state: RootState) => state.activePageNumber);

  return (
    <>
      <AppBar position="fixed">
        <div className="nav__container">
          <NavLink 
            to="/get" exact
            className="nav__link"
            activeClassName="nav__link_active" 
          >
            Data Retriever
          </NavLink>

          <NavLink
            to={`/view/${activePageNumber + 1}`} exact
            className="nav__link"
            activeClassName="nav__link_active" 
          >
            Data Viewer
          </NavLink>

          <NavLink 
            to="/" exact
            className="nav__link"
            activeClassName="nav__link_active" 
          >
            Home Page
          </NavLink>  
        </div>
      </AppBar>
    </>
  );
}

export default Nav;