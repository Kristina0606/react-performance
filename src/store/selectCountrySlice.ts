import { createSlice } from '@reduxjs/toolkit';

const selectCountrySlice = createSlice({
  name: 'selectedCountry',
  initialState: {
    country: '',
  },
  reducers: {
    selectCountry(state, action) {
      state.country = action.payload;
    },
  },
});

export const { selectCountry } = selectCountrySlice.actions;

export default selectCountrySlice.reducer;
