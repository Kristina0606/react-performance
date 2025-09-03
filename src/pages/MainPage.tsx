import type { FC } from 'react';
import { useGetCountriesQuery } from '../api/co2Api';
import React from 'react';
import Countries from '../components/Countries';

const MainPage: FC = () => {
  const { data = {}, isError } = useGetCountriesQuery();

  return (
    <>
      {isError ? (
        <div>error loading data...</div>
      ) : (
        <Countries countriesList={data} />
      )}
    </>
  );
};

export default React.memo(MainPage);
