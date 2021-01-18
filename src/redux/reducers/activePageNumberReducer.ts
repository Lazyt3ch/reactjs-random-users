import { createReducer } from "@reduxjs/toolkit"

const activePageNumberReducer = createReducer(0, {
  SET_ACTIVE_PAGE_NUMBER: (state, action):number => {
    return action.payload;
  }
});

export default activePageNumberReducer;