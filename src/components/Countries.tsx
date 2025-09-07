import { lazy, Suspense, useMemo, type FC } from 'react';
import type { CountriesProps } from '../types/interfaces';
import { SkeletonCountryLoader } from '../skeletons/SkeletonCountryLoader';
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const CountryPoint = lazy(() => import('./CountryPoint'));

const Countries: FC<CountriesProps> = ({ countriesList }) => {
  console.log(countriesList);
  const searchData = useSelector((state: RootState) => state.country.country);
  const isSorted = useSelector((state: RootState) => state.isSorted.isSorted);
  const codes = useMemo(
    () =>
      isSorted
        ? Object.keys(countriesList).reverse()
        : Object.keys(countriesList),
    [countriesList, isSorted]
  );
  const searchCodes = useMemo(() => {
    const lower = searchData.toLowerCase().trim();
    if (!lower) {
      return codes;
    }
    return codes.filter((item) => item.toLowerCase().startsWith(lower));
  }, [codes, searchData]);

  return (
    <div className="flex flex-col items-center gap-2">
      {searchCodes.map((code) => {
        return (
          <Suspense
            key={code}
            fallback={<SkeletonCountryLoader count={searchCodes.length} />}
          >
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
