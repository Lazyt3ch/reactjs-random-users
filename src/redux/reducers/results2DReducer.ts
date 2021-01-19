import { createReducer, PayloadAction } from "@reduxjs/toolkit"

interface TwoDimArrayOfStrings {
  results2D: string[][];
}

const initialState = { results2D: [] };

const results2DReducer = createReducer(initialState, {
  RESULTS_2D: (state, action:PayloadAction<TwoDimArrayOfStrings>) => {
    state.results2D = action.payload;
  }
});

export default results2DReducer;