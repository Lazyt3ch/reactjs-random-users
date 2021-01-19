import { createReducer, PayloadAction } from "@reduxjs/toolkit"

const initialState: [string, boolean][] = [];

const statusesReducer = createReducer(initialState, {
  STATUSES: (state, action: PayloadAction<[string, boolean][]>) => {
    state = action.payload;
  }
});

export default statusesReducer;