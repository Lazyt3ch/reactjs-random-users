import { createReducer, PayloadAction } from "@reduxjs/toolkit"

const initialState = { results2D: [[""]] };

const results2DReducer = createReducer(initialState, {
  RESULTS_2D: (state, action:PayloadAction<string[][]>) => {
    state.results2D = action.payload;
  }
});

export default results2DReducer;