import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

const validPropertiesReducer = createReducer(initialState, {
  VALID_PROPERTIES: (state, action: PayloadAction<string[]>) => {
    state = action.payload;
  }
});

export default validPropertiesReducer;