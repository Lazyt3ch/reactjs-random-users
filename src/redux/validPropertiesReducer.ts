import { createReducer } from "@reduxjs/toolkit"

const validPropertiesReducer = createReducer([], {
  SET_VALID_PROPERTIES: (state, action):string[] => {
    return action.payload;
  }
});

export default validPropertiesReducer;