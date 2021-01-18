import { configureStore } from '@reduxjs/toolkit';
import numResultsReducer from "./numResultsReducer";
import statusesReducer from "./statusesReducer";
import validPropertiesReducer from "./validPropertiesReducer";
import results2DReducer from "./results2DReducer";
import gridColumnsFormulaReducer from "./gridColumnsFormulaReducer";
import isBriefResultsReducer from "./isBriefResultsReducer";
import activePageNumberReducer from "./activePageNumberReducer";
import scrollTopArrReducer from "./scrollTopArrReducer";
import prevPagePathReducer from "./prevPagePathReducer";

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