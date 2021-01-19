import { createReducer, PayloadAction } from "@reduxjs/toolkit"

export type ArrayOfStringBooleanTuples = [string, boolean][];

// interface Statuses {
//   statuses: ArrayOfStringBooleanTuples;
// }

// const initialState = { statuses: [] } as Statuses;
const initialState = [] as ArrayOfStringBooleanTuples;

const statusesReducer = createReducer(initialState, {
  STATUSES: (state, action: PayloadAction<ArrayOfStringBooleanTuples>) => {
    // state.statuses = action.payload;
    state = action.payload;
  }
});

export default statusesReducer;