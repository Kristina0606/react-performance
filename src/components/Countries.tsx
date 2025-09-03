import { lazy, Suspense, type FC } from 'react';
import type { CountriesProps } from '../types/interfaces';
import { SkeletonCountryLoader } from '../skeletons/SkeletonCountryLoader';
import React from 'react';

const CountryPoint = lazy(() => import('./CountryPoint'));

const Countries: FC<CountriesProps> = ({ countriesList }) => {
  console.log(countriesList);
  const codes = Object.keys(countriesList);
  return (
    <div className="flex flex-col items-center gap-2">
      {codes.map((code) => {
        return (
          <Suspense key={code} fallback={<SkeletonCountryLoader />}>
            <CountryPoint
              key={code}
              code={code}
              countriesList={countriesList}
            />
          </Suspense>
        );
      })}
    </div>
  );
};

export default React.memo(Countries);
