import { createSlice } from "@reduxjs/toolkit"

interface IsBriefResultsAction {
  type: string;
  payload: boolean;
}

// Slice
const slice = createSlice({
  name: 'isBriefResultsReducer',
  initialState: {
    isBriefResults: false,
  },
  reducers: {
    setIsBriefResults: (state, action: IsBriefResultsAction) => {
      state.isBriefResults = action.payload;
    }
  },
});

export default slice.reducer;
