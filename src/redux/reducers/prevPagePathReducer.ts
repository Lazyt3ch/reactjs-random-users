import { createReducer } from "@reduxjs/toolkit"

const prevPagePathReducer = createReducer("", {
  SET_GRID_COLUMNS_FORMULA: (state, action):string => {
    return action.payload;
  }
});

export default prevPagePathReducer;