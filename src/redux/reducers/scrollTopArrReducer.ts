import { createReducer, PayloadAction } from "@reduxjs/toolkit"

const initialState: number[] = [];

const scrollTopArrReducer = createReducer(initialState, {
  SCROLL_TOP_ARR: (state, action: PayloadAction<number[]>) => {
    state = action.payload;
  }
});

export default scrollTopArrReducer;