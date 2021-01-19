import React, {useEffect} from "react";

import Scroller from './Components/Scroller/Scroller';
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Fetcher from "./Components/Fetcher/Fetcher";
import UsersGrid from "./Components/UserGrid/UsersGrid";

import isNonEmptyArray from "./utils/badDataChecker";
import constants from "./constants";

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import actionTypes from "./redux/actionTypes";
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();

  const results2D = useSelector((state: RootState) => state.results2D);
  const totalPages = useSelector((state: RootState) => state.totalPages);

  useEffect( () => {
    const {usersPerPage} = constants;

    // Row 0 is used for table header, so content rows numbering starts from 1
    const totalUsers = results2D.length - 1; // First row contains property names
    const updatedTotalPages = Math.ceil(totalUsers / usersPerPage);
    dispatch({ type: actionTypes.TOTAL_PAGES, payload: updatedTotalPages });
  }, [results2D, dispatch]);
  
  
  useEffect( () => {
    if (!totalPages && isNonEmptyArray(results2D)) {
      return;
    }

    const updatedScrollTopArr: number[] = new Array(totalPages).fill(0);
    dispatch({ type: actionTypes.SCROLL_TOP_ARR, payload: updatedScrollTopArr });
  }, [totalPages, results2D, dispatch]);


  return (
    <Router>
      <Nav />
      
      <Scroller>

        <Switch>
          <Route path="/get" exact>
            <Fetcher />
          </Route>

          <Route path="/view/">
            <UsersGrid />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Scroller>
    </Router>
  );
}

export default App;
