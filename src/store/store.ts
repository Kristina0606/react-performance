import { configureStore } from '@reduxjs/toolkit';
import { co2Api } from '../api/co2Api';
import yearReducer from './selectYearSlice';
import countryReducer from './selectCountrySlice';
import isSortedReducer from './sortSlice';

export const store = configureStore({
  reducer: {
    [co2Api.reducerPath]: co2Api.reducer,
    year: yearReducer,
    country: countryReducer,
    isSorted: isSortedReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(co2Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
