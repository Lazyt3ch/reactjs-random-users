import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

const gridColumnsFormulaReducer = createReducer(initialState, {
  GRID_COLUMNS_FORMULA: (state, action: PayloadAction<string>) => {
    return action.payload;
  }
});

export default gridColumnsFormulaReducer;