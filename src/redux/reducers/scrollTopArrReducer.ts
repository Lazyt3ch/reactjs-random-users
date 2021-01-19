import { createReducer, PayloadAction } from "@reduxjs/toolkit";

type ArrayOfNumbers = number[];

const initialState = [] as ArrayOfNumbers;

const scrollTopArrReducer = createReducer(initialState, {
  SCROLL_TOP_ARR: (state, action: PayloadAction<ArrayOfNumbers>) => {
    return action.payload;
  }
});

export default scrollTopArrReducer;