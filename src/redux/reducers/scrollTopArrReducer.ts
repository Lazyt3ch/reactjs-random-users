import { createReducer, PayloadAction } from "@reduxjs/toolkit"

const initialState = { scrollTopArr: [0] };

const scrollTopArrReducer = createReducer(initialState, {
  SCROLL_TOP_ARR: (state, action: PayloadAction<number[]>) => {
    state.scrollTopArr = action.payload;
  }
});

export default scrollTopArrReducer;