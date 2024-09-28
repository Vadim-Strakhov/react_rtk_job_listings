import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type Filter = string | number | boolean;

const filterSlice = createSlice({
  name: "@@filter",
  initialState: [] as Filter[],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFilter: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    clearFilter: () => [],
  },
});

export const { addFilter, clearFilter, removeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectFilters = (state: RootState) => state.filters;
