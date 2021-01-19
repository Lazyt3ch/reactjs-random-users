import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = 0;

const activePageNumberReducer = createReducer(initialState, {
  ACTIVE_PAGE_NUMBER: (state, action: PayloadAction<number>) => {
    return action.payload;
  }
});

export default activePageNumberReducer;
