import { lazy, Suspense, type FC } from 'react';
import { useParams } from 'react-router';

const CountryDataTable = lazy(() => import('../components/CountryDataTable'));

const TablePage: FC = () => {
  const params = useParams();
  const paramCountry = params.country;
  return (
    <>
      <div className="flex flex-col gap-6 items-center mt-5">
        {paramCountry ? (
          <>
            <p className="text-2xl">{paramCountry} data table:</p>
            <Suspense fallback={<div>loading...</div>}>
              <CountryDataTable paramCountry={paramCountry} />
            </Suspense>
          </>
        ) : (
          <p>The country is not found...</p>
        )}
      </div>
    </>
  );
};

export default TablePage;
