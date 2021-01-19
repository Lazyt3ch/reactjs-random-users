import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = { prevPagePath: "" };

const prevPagePathReducer = createReducer(initialState, {
  PREV_PAGE_PATH: (state, action: PayloadAction<string>) => {
    state.prevPagePath = action.payload;
  }
});

export default prevPagePathReducer;
