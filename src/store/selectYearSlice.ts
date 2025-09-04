import { createSlice } from '@reduxjs/toolkit';

const selectYearSlice = createSlice({
  name: 'selectedYear',
  initialState: {
    year: 2023,
  },
  reducers: {
    selectYear(state, action) {
      state.year = action.payload.year;
    },
  },
});

export const { selectYear } = selectYearSlice.actions;

export default selectYearSlice.reducer;
