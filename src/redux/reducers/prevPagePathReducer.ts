import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

const prevPagePathReducer = createReducer(initialState, {
  PREV_PAGE_PATH: (state, action: PayloadAction<string>) => {
    return action.payload;
  }
});

export default prevPagePathReducer;
