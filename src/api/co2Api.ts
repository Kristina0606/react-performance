import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Country } from '../types/interfaces';

export const co2Api = createApi({
  reducerPath: 'co2Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nyc3.digitaloceanspaces.com/owid-public/data/co2/',
  }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    // getCountries: builder.query<Record<string, Country>, void>({
    //   query: () => 'owid-co2-data.json',
    // }),

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getCountryCodes: builder.query<string[], void>({
      queryFn: async (_, _api, _extra, fetchWithBQ) => {
        const res = await fetchWithBQ('owid-co2-data.json');
        if (res.error) return { error: res.error };
        return { data: Object.keys(res.data as Record<string, Country>) };
      },
    }),

    getCountryByCode: builder.query<Country, string>({
      async queryFn(code, _api, _extra, fetchWithBQ) {
        const res = await fetchWithBQ('owid-co2-data.json');
        if (res.error) return { error: res.error };
        return { data: (res.data as Record<string, Country>)[code] };
      },
    }),
  }),
});

export const { useGetCountryCodesQuery, useGetCountryByCodeQuery } = co2Api;
