import { createReducer, PayloadAction } from "@reduxjs/toolkit"

interface ScrollTopArr {
  scrollTopArr: number[];
}

const initialState = { scrollTopArr: [] } as ScrollTopArr;

const scrollTopArrReducer = createReducer(initialState, {
  SCROLL_TOP_ARR: (state, action: PayloadAction<number[]>) => {
    state.scrollTopArr = action.payload;
  }
});

export default scrollTopArrReducer;