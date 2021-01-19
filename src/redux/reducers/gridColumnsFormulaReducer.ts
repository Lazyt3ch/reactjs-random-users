import { createSlice } from "@reduxjs/toolkit"

interface GridColumnsFormulaAction {
  type: string;
  payload: string;
}

// Slice
const slice = createSlice({
  name: 'gridColumnsFormula',
  initialState: {
    gridColumnsFormula: "",
  },
  reducers: {
    setGridColumnsFormula: (state, action: GridColumnsFormulaAction) => {
      state.gridColumnsFormula = action.payload;
    }
  },
});

export default slice.reducer;
