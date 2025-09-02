import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Country } from '../types/interfaces';

export const co2Api = createApi({
  reducerPath: 'co2Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nyc3.digitaloceanspaces.com/owid-public/data/co2/',
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getCountries: builder.query<Record<string, Country>, void>({
      query: () => 'owid-co2-data.json',
    }),
  }),
});

export const { useGetCountriesQuery } = co2Api;
