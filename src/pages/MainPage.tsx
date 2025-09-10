import type { FC } from 'react';
import React from 'react';
import Countries from '../components/Countries';
import { ClipLoader } from 'react-spinners';
import SearchCountry from '../components/SearchCountry';
import AZSort from '../components/AZSort';
import { useGetCountryCodesQuery } from '../api/co2Api';

const MainPage: FC = () => {
  const { data: codes = [], isLoading, isError } = useGetCountryCodesQuery();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <ClipLoader
            color="#57729dff"
            loading={isLoading}
            size={56}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : isError ? (
        <div>error loading data...</div>
      ) : (
        <>
          <SearchCountry />
          <div className="flex gap-10">
            {/* <DataListOfCountries countriesList={data} /> */}
            <AZSort />
          </div>
          <Countries countriesList={codes} />
        </>
      )}
    </>
  );
};

export default React.memo(MainPage);
