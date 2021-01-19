import { createReducer, PayloadAction } from "@reduxjs/toolkit";

interface ValidProperties {
  validProperties: string[];
}

const initialState = { validProperties: [] } as ValidProperties;

const validPropertiesReducer = createReducer(initialState, {
  VALID_PROPERTIES: (state, action: PayloadAction<string[]>) => {
    state.validProperties = action.payload;
  }
});

export default validPropertiesReducer;