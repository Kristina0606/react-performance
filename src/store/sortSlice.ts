import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sortedArr',
  initialState: {
    isSorted: false,
  },
  reducers: {
    isSortedToggle(state) {
      state.isSorted = !state.isSorted;
    },
  },
});

export const { isSortedToggle } = sortSlice.actions;

export default sortSlice.reducer;
