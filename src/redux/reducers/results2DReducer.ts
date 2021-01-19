import { createReducer, PayloadAction } from "@reduxjs/toolkit"

const initialState: string[][] = [];

const results2DReducer = createReducer(initialState, {
  RESULTS_2D: (state, action:PayloadAction<string[][]>) => {
    state = action.payload;
  }
});

export default results2DReducer;