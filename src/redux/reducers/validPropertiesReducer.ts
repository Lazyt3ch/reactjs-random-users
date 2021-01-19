import { createReducer, PayloadAction } from "@reduxjs/toolkit";

export type ArrayOfStrings = string[];

// interface ValidProperties {
//   validProperties: ArrayOfStrings;
// }

// const initialState = { validProperties: [] } as ValidProperties;
const initialState = [] as ArrayOfStrings;

const validPropertiesReducer = createReducer(initialState, {
  VALID_PROPERTIES: (state, action: PayloadAction<ArrayOfStrings>) => {
    // state.validProperties = action.payload;
    return action.payload;
  }
});

export default validPropertiesReducer;