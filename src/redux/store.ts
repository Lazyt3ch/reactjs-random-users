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
import totalPagesReducer from './reducers/totalPagesReducer';

import { save, load } from "redux-localstorage-simple";
import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync';

// import actionTypes from "./actionTypes"

const rootReducer = combineReducers({
  numResults: numResultsReducer,
  statuses: statusesReducer,
  validProperties: validPropertiesReducer,
  results2D: results2DReducer,
  gridColumnsFormula: gridColumnsFormulaReducer,
  isBriefResults: isBriefResultsReducer,
  activePageNumber: activePageNumberReducer,
  scrollTopArr: scrollTopArrReducer,
  prevPagePath: prevPagePathReducer,
  totalPages: totalPagesReducer,
});

const preloadedState = load();

const stateSyncConfig = {
  blacklist: [
    // actionTypes.ACTIVE_PAGE_NUMBER, // May cause issues if the number of pages is reduced!
  ], // Add blacklisted actions
};

const stateSyncMiddlewares = [createStateSyncMiddleware(stateSyncConfig)];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: Object.keys(preloadedState).length ? preloadedState : {},
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(...stateSyncMiddlewares)
      .concat(save({ debounce: 500 })),  
});

initMessageListener(store);

export default store;

export type RootState = ReturnType<typeof rootReducer>;