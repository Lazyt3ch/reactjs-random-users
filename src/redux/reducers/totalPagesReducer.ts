import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = 0;

const totalPagesReducer = createReducer(initialState, {
  TOTAL_PAGES: (state, action: PayloadAction<number>) => {
    return action.payload;
  }
});

export default totalPagesReducer;
