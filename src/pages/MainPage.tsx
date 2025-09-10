import type { FC } from 'react';
import { useGetCountriesQuery } from '../api/co2Api';
import React from 'react';
import Countries from '../components/Countries';
import DataListOfCountries from '../components/DataListOfCountries';
import SearchCountry from '../components/SearchCountry';
import AZSort from '../components/AZSort';

const MainPage: FC = () => {
  const { data = {}, isError } = useGetCountriesQuery();

  return (
    <>
      {isError ? (
        <div>error loading data...</div>
      ) : (
        <>
          <SearchCountry />
          <div className="flex gap-10">
            <DataListOfCountries countriesList={data} />
            <AZSort />
          </div>
          <Countries countriesList={data} />
        </>
      )}
    </>
  );
};

export default React.memo(MainPage);
