import { createReducer, PayloadAction } from "@reduxjs/toolkit"

interface Statuses {
  statuses: [string, boolean][];
}

const initialState = { statuses: [] } as Statuses;

const statusesReducer = createReducer(initialState, {
  STATUSES: (state, action: PayloadAction<[string, boolean][]>) => {
    state.statuses = action.payload;
  }
});

export default statusesReducer;