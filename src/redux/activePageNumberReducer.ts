import { createReducer } from "@reduxjs/toolkit"
import { ReducerAction } from "react";

const activePageNumberReducer = createReducer(0, {
  SET_ACTIVE_PAGE_NUMBER: (state, action):number => {
    return action.payload;
  }
})

export default activePageNumberReducer;