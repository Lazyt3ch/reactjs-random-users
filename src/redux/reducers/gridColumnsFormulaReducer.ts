import { createReducer } from "@reduxjs/toolkit"

const gridColumnsFormulaReducer = createReducer("", {
  SET_GRID_COLUMNS_FORMULA: (state, action):string => {
    return action.payload;
  }
});

export default gridColumnsFormulaReducer;