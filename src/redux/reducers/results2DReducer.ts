import { createReducer, PayloadAction } from "@reduxjs/toolkit"

interface Results2DState {
  results2D: string[][];
}

const initialState = { results2D: [] } as Results2DState;

const results2DReducer = createReducer(initialState, {
  RESULTS_2D: (state, action:PayloadAction<string[][]>) => {
    state.results2D = action.payload;
  }
});

export default results2DReducer;