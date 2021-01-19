import { createReducer, PayloadAction } from "@reduxjs/toolkit"

type TwoDimArrayOfStrings = string[][];

// interface Results2DState {
//   results2D: TwoDimArrayOfStrings;
// }

// const initialState = { results2D: [] } as Results2DState;
const initialState = [] as TwoDimArrayOfStrings;

const results2DReducer = createReducer(initialState, {
  RESULTS_2D: (state, action:PayloadAction<TwoDimArrayOfStrings>) => {
    // state.results2D = action.payload;
    return action.payload;
  }
});

export default results2DReducer;