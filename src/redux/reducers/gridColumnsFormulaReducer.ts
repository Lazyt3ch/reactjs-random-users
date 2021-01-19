import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = { gridColumnsFormula: "" };

const gridColumnsFormulaReducer = createReducer(initialState, {
  GRID_COLUMNS_FORMULA: (state, action: PayloadAction<string>) => {
    state.gridColumnsFormula = action.payload;
  }
});

export default gridColumnsFormulaReducer;