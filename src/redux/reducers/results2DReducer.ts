import { createReducer } from "@reduxjs/toolkit"

const results2DReducer = createReducer([], {
  SET_RESULTS_2D: (state, action):string[][] => {
    return action.payload;
  }
});

export default results2DReducer;