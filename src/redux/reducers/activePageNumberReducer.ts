import { createSlice } from "@reduxjs/toolkit";

interface ActivePageNumberAction {
  type: string;
  payload: number;
}

// Slice
const slice = createSlice({
  name: 'activePageNumber',
  initialState: {
    activePageNumber: 0,
  },
  reducers: {
    setActivePageNumber: (state, action: ActivePageNumberAction) => {
      state.activePageNumber = action.payload;
    }
  },
});

export default slice.reducer;

// Actions
// const {setActivePageNumber} = slice.actions;



