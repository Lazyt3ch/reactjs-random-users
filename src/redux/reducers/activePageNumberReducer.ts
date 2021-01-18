import { createSlice } from "@reduxjs/toolkit";

interface ActivePageNumberState {
  activePageNumber: number;
}

// Slice
const slice = createSlice({
  name: 'activePageNumber',
  initialState: {
    activePageNumber: 0;
  },
  reducers: {
    setActivePageNumber: (state, action) => {
      state.activePageNumber = action.payload;
    }
  },
});

export default slice.reducer;

// Actions
const {setActivePageNumber} = slice.actions;



