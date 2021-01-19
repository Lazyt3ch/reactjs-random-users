import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import numResultsReducer from "./reducers/numResultsReducer";
import statusesReducer from "./reducers/statusesReducer";
import validPropertiesReducer from "./reducers/validPropertiesReducer";
import results2DReducer from "./reducers/results2DReducer";
import gridColumnsFormulaReducer from "./reducers/gridColumnsFormulaReducer";
import isBriefResultsReducer from "./reducers/isBriefResultsReducer";
import activePageNumberReducer from "./reducers/activePageNumberReducer";
import scrollTopArrReducer from "./reducers/scrollTopArrReducer";
import prevPagePathReducer from "./reducers/prevPagePathReducer";

const reducer = combineReducers({
  numResultsReducer,
  statusesReducer,
  validPropertiesReducer,
  results2DReducer,
  gridColumnsFormulaReducer,
  isBriefResultsReducer,
  activePageNumberReducer,
  scrollTopArrReducer,
  prevPagePathReducer,
});

const store = configureStore({reducer});

export default store;