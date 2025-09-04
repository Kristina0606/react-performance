import type { FC } from 'react';
import { useGetCountriesQuery } from '../api/co2Api';
import React from 'react';
import Countries from '../components/Countries';
import { ClipLoader } from 'react-spinners';
import DataListOfCountries from '../components/DataListOfCountries';

const MainPage: FC = () => {
  const { data = {}, isLoading, isError } = useGetCountriesQuery();

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <ClipLoader
            color="#57729dff"
            loading={isLoading}
            size={48}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : isError ? (
        <div>error loading data...</div>
      ) : (
        <>
          <DataListOfCountries countriesList={data} />
          <Countries countriesList={data} />
        </>
      )}
    </>
  );
};

export default React.memo(MainPage);
