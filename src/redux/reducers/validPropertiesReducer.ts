import { createReducer, PayloadAction } from "@reduxjs/toolkit";

export type ArrayOfStrings = string[];

const initialState = [] as ArrayOfStrings;

const validPropertiesReducer = createReducer(initialState, {
  VALID_PROPERTIES: (state, action: PayloadAction<ArrayOfStrings>) => {
    return action.payload;
  }
});

export default validPropertiesReducer;