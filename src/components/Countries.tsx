import { useCallback, useMemo, useState, type FC } from 'react';
import type { CountriesProps } from '../types/interfaces';
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import {
  AutoSizer,
  InfiniteLoader,
  List,
  type ListRowRenderer,
  type IndexRange,
} from 'react-virtualized';

import CountryRow from './CountryRow';

const Countries: FC<CountriesProps> = ({ countriesList }) => {
  const searchData = useSelector((state: RootState) => state.country.country);
  const isSorted = useSelector((state: RootState) => state.isSorted.isSorted);
  const codes = useMemo(
    () => (isSorted ? [...countriesList].reverse() : [...countriesList]),
    [countriesList, isSorted]
  );
  const searchCodes = useMemo(() => {
    const lower = searchData.toLowerCase().trim();
    if (!lower) {
      return codes;
    }
    return codes.filter((item) => item.toLowerCase().startsWith(lower));
  }, [codes, searchData]);

  const PAGE = 5;
  const [visibleCount, setVisibleCount] = useState(PAGE);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loadMore = (_params: IndexRange): Promise<void> => {
    if (visibleCount < codes.length) {
      setVisibleCount((prev) => prev + PAGE);
    }
    return Promise.resolve();
  };

  const rowRenderer = useCallback<ListRowRenderer>(
    ({ index, key, style }) => {
      const code = searchCodes[index];
      return <CountryRow key={key} code={code} style={style} />;
    },
    [searchCodes]
  );

  return (
    <div style={{ width: 600, height: 600 }}>
      <InfiniteLoader
        isRowLoaded={({ index }) => index < visibleCount}
        loadMoreRows={loadMore}
        rowCount={codes.length}
        minimumBatchSize={PAGE}
        threshold={2}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ width, height }) => (
              <List
                ref={registerChild}
                onRowsRendered={onRowsRendered}
                width={width}
                height={height}
                rowCount={visibleCount}
                rowHeight={120}
                rowRenderer={rowRenderer}
              />
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  );
};

export default React.memo(Countries);
