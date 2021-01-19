import { createReducer, PayloadAction } from "@reduxjs/toolkit";

const initialState = { activePageNumber: 0 };

const activePageNumberReducer = createReducer(initialState, {
  SET_ACTIVE_PAGE_NUMBER: (state, action: PayloadAction<number>) => {
    state.activePageNumber = action.payload;
  }
});

export default activePageNumberReducer;
