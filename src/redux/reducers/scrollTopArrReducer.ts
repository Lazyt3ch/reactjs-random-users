import { createReducer } from "@reduxjs/toolkit"

const scrollTopArrReducer = createReducer([], {
  SCROLL_TOP_ARR: (state, action):number[] => {
    return action.payload;
  }
});

export default scrollTopArrReducer;