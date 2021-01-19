import React from "react";
import {NavLink} from "react-router-dom";
import {AppBar} from '@material-ui/core';
import PropTypes from "prop-types";
import "./Nav.css";

// import store from "../../redux/store";

interface Props {
  activePageNumber: number;
}

function Nav(props: Props) {
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
    </>
  );
}

Nav.propTypes = {
  activePageNumber: PropTypes.number.isRequired,
};

export default Nav;