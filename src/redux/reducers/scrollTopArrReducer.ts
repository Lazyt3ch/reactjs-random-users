import { createReducer, PayloadAction } from "@reduxjs/toolkit";

type ArrayOfNumbers = number[];

// interface ScrollTopArr {
//   scrollTopArr: ArrayOfNumbers;
// }

// const initialState = { scrollTopArr: [] } as ScrollTopArr;
const initialState = [] as ArrayOfNumbers;

const scrollTopArrReducer = createReducer(initialState, {
  SCROLL_TOP_ARR: (state, action: PayloadAction<ArrayOfNumbers>) => {
    return action.payload;
  }
});

export default scrollTopArrReducer;