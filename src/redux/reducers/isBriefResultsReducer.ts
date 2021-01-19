import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = { isBriefResults: false };

const isBriefResultsReducer = createReducer(initialState, {
  SET_GRID_COLUMNS_FORMULA: (state, action: PayloadAction<boolean>) => {
    state.isBriefResults = action.payload;
  }
});

export default isBriefResultsReducer;
