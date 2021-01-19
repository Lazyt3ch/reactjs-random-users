import { createReducer, PayloadAction } from "@reduxjs/toolkit"

export type ArrayOfStringBooleanTuples = [string, boolean][];

const initialState = [] as ArrayOfStringBooleanTuples;

const statusesReducer = createReducer(initialState, {
  STATUSES: (state, action: PayloadAction<ArrayOfStringBooleanTuples>) => {
    return action.payload;
  }
});

export default statusesReducer;