import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = false;

const isBriefResultsReducer = createReducer(initialState, {
  IS_BRIEF_RESULTS: (state, action: PayloadAction<boolean>) => {
    state = action.payload;
  }
});

export default isBriefResultsReducer;
