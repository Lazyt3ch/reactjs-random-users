import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        numResults: numResultsReducer,
        statuses: statusesReducer,
        validProperties: validPropertiesReducer,
        results2D: results2DReducer,
        gridColumnsFormula: gridColumnsFormulaReducer,
        isBriefResults: isBriefResultsReducer,
        

    }
});