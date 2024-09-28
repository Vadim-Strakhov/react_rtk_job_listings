import { createSlice } from "@reduxjs/toolkit";
import { IPosition } from "../../models/types";
import { RootState } from "../../store";

const positionSlice = createSlice({
  name: "@@position",
  initialState: [] as IPosition[],
  reducers: {
    addPositions: (state, action) => action.payload,
  },
});

export const { addPositions } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;

export const selectVisiblePositions = (state: RootState, filters: string[]) => {
  if (filters.length === 0) return state.positions;

  return state.positions.filter((pos) => {
    const posFilters = [pos.role, pos.level, ...pos.languages, ...pos.tools];

    return filters.every((filter) => posFilters.includes(filter));
  });
};
