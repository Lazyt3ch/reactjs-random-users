import { createReducer, PayloadAction } from "@reduxjs/toolkit";

interface NumResults {
  numResults: number;
}

const initialState = { numResults: 0 } as NumResults;

const numResultsReducer = createReducer(initialState, {
  NUM_RESULTS: (state, action: PayloadAction<number>) => {
    state.numResults = action.payload;
  }
});

export default numResultsReducer;
