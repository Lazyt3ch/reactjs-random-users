import {configureStore} from '@reduxjs/toolkit';

import numResultsReducer from "./reducers/numResultsReducer";
import statusesReducer from "./reducers/statusesReducer";
import validPropertiesReducer from "./reducers/validPropertiesReducer";
import results2DReducer from "./reducers/results2DReducer";
import gridColumnsFormulaReducer from "./reducers/gridColumnsFormulaReducer";
import isBriefResultsReducer from "./reducers/isBriefResultsReducer";
import activePageNumberReducer from "./reducers/activePageNumberReducer";
import scrollTopArrReducer from "./reducers/scrollTopArrReducer";
import prevPagePathReducer from "./reducers/prevPagePathReducer";

const store = configureStore({
  reducer: {
    numResults: numResultsReducer,
    statuses: statusesReducer,
    validProperties: validPropertiesReducer,
    results2D: results2DReducer,
    gridColumnsFormula: gridColumnsFormulaReducer,
    isBriefResults: isBriefResultsReducer,
    activePageNumber: activePageNumberReducer,
    scrollTopArr: scrollTopArrReducer,
    prevPagePath: prevPagePathReducer,
  }
});

export default store;