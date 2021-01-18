import { createReducer } from "@reduxjs/toolkit"

const statusesReducer = createReducer([], {
  SET_STATUSES: (state, action):[string, boolean][] => {
    return action.payload;
  }
});

export default statusesReducer;