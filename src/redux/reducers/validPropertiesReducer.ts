import { createReducer, PayloadAction } from "@reduxjs/toolkit";

type ArrayOfStrings = string[];

interface ValidProperties {
  validProperties: ArrayOfStrings;
}

const initialState = { validProperties: [] } as ValidProperties;

const validPropertiesReducer = createReducer(initialState, {
  VALID_PROPERTIES: (state, action: PayloadAction<ArrayOfStrings>) => {
    state.validProperties = action.payload;
  }
});

export default validPropertiesReducer;