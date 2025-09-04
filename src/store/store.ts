import { configureStore } from '@reduxjs/toolkit';
import { co2Api } from '../api/co2Api';
import yearReducer from './selectYearSlice';

export const store = configureStore({
  reducer: {
    [co2Api.reducerPath]: co2Api.reducer,
    year: yearReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(co2Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
