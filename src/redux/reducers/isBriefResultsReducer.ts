import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = { isBriefResults: false };

const isBriefResultsReducer = createReducer(initialState, {
  IS_BRIEF_RESULTS: (state, action: PayloadAction<boolean>) => {
    state.isBriefResults = action.payload;
  }
});

export default isBriefResultsReducer;
