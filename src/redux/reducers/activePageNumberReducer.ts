import { createAction, createReducer } from "@reduxjs/toolkit";

interface ActivePageNumberState {
  activePageNumber: number;
}

const setActivePageNumber = createAction('activePageNumber/setActivePageNumber');
const initialState = { activePageNumber: 0 } as ActivePageNumberState;

const activePageNumberReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActivePageNumber, (state, action) => {
      state.activePageNumber = action.payload;
    })
});

export default activePageNumberReducer;