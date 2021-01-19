import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = 0;

const numResultsReducer = createReducer(initialState, {
  NUM_RESULTS: (state, action: PayloadAction<number>) => {
    return action.payload;
  }
});

export default numResultsReducer;
