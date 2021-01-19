import { createReducer, PayloadAction } from "@reduxjs/toolkit"

type TwoDimArrayOfStrings = string[][];

const initialState = [] as TwoDimArrayOfStrings;

const results2DReducer = createReducer(initialState, {
  RESULTS_2D: (state, action:PayloadAction<TwoDimArrayOfStrings>) => {
    return action.payload;
  }
});

export default results2DReducer;