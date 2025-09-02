import { configureStore } from '@reduxjs/toolkit';
import { co2Api } from '../api/co2Api';

export const store = configureStore({
  reducer: {
    [co2Api.reducerPath]: co2Api.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(co2Api.middleware),
});
