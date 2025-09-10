import { lazy, Suspense, useCallback, useMemo, type FC } from 'react';
import type { CountriesProps } from '../types/interfaces';
import { SkeletonCountryLoader } from '../skeletons/SkeletonCountryLoader';
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { AutoSizer, List, type ListRowRenderer } from 'react-virtualized';

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

  const rowRenderer = useCallback<ListRowRenderer>(
    ({ index, key, style }) => {
      const code = searchCodes[index];
      return (
        <div
          key={key}
          style={style}
          className="cursor-pointer border border-gray-300 rounded-md p-4 hover:bg-blue-200 duration-300"
        >
          <Suspense fallback={<SkeletonCountryLoader count={1} />}>
            <CountryPoint code={code} countriesList={countriesList} />
          </Suspense>
        </div>
      );
    },
    [countriesList, searchCodes]
  );

  return (
    <div style={{ width: '70%', height: '80vh' }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowCount={searchCodes.length}
            rowHeight={113}
            rowRenderer={rowRenderer}
            overscanRowCount={2}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default React.memo(Countries);
