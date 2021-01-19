import { createReducer, PayloadAction } from "@reduxjs/toolkit"

type ArrayOfStringBooleanTuples = [string, boolean][];

interface Statuses {
  statuses: ArrayOfStringBooleanTuples;
}

const initialState = { statuses: [] } as Statuses;

const statusesReducer = createReducer(initialState, {
  STATUSES: (state, action: PayloadAction<ArrayOfStringBooleanTuples>) => {
    state.statuses = action.payload;
  }
});

export default statusesReducer;