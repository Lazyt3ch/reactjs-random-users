import { createReducer } from "@reduxjs/toolkit"

const isBriefResultsReducer = createReducer(false, {
  SET_IS_BRIEF_RESULTS: (state, action):boolean => {
    return action.payload;
  }
});

export default isBriefResultsReducer;