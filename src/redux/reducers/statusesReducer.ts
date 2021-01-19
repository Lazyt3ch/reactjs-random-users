import { createReducer, PayloadAction } from "@reduxjs/toolkit"

const initialState = { statuses: [["", false]] };

const statusesReducer = createReducer(initialState, {
  SET_STATUSES: (state, action: PayloadAction<[string, boolean][]>) => {
    state.statuses = action.payload;
  }
});

export default statusesReducer;