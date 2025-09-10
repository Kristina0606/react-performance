import { lazy, type FC } from 'react';
import { useGetCountryByCodeQuery } from '../api/co2Api';
import { SkeletonCountryLoader } from '../skeletons/SkeletonCountryLoader';

const CountryPoint = lazy(() => import('./CountryPoint'));

const CountryRow: FC<{
  key: string;
  code: string;
  style: React.CSSProperties;
}> = ({ key, code, style }) => {
  const { data: country, isFetching } = useGetCountryByCodeQuery(code);
  console.log(country);
  return (
    <div
      key={key}
      style={style}
      className="cursor-pointer border border-gray-300 rounded-md p-4 hover:bg-blue-200 duration-300"
    >
      {isFetching || !country ? (
        <SkeletonCountryLoader count={1} />
      ) : (
        <CountryPoint country={country} code={code} />
      )}
    </div>
  );
};

export default CountryRow;
