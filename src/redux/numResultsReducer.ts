import { createReducer } from "@reduxjs/toolkit"

const numResultsReducer = createReducer(0, {
  SET_NUM_RESULTS: (state, action):number => {
    return action.payload;
  }
})

export default numResultsReducer;