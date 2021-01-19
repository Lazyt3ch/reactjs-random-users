import { createReducer, PayloadAction } from "@reduxjs/toolkit"

const initialState = [];

const results2DReducer = createReducer(initialState, {
  RESULTS_2D: (state, action):PayloadAction<string[][]> => {
    return action.payload;
  }
});

export default results2DReducer;