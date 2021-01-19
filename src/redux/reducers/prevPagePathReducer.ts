import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

const prevPagePathReducer = createReducer(initialState, {
  PREV_PAGE_PATH: (state, action: PayloadAction<string>) => {
    state = action.payload;
  }
});

export default prevPagePathReducer;
