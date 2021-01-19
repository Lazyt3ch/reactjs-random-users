import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = { validProperties: [""] };

const validPropertiesReducer = createReducer(initialState, {
  VALID_PROPERTIES: (state, action: PayloadAction<string[]>) => {
    state.validProperties = action.payload;
  }
});

export default validPropertiesReducer;