import { createReducer, PayloadAction } from "@reduxjs/toolkit";

// const initialState = { numResults: 0 };
const initialState = 0;

const numResultsReducer = createReducer(initialState, {
  NUM_RESULTS: (state, action: PayloadAction<number>) => {
    state = action.payload;
  }
});

export default numResultsReducer;
