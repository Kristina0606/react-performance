import type { FC } from 'react';
import type { CountriesProps } from '../types/interfaces';

const Countries: FC<CountriesProps> = ({ countriesList }) => {
  console.log(countriesList);
  const codes = Object.keys(countriesList);
  return (
    <div>
      {codes.map((code) => {
        return <div key={code}>{code}</div>;
      })}
    </div>
  );
};

export default Countries;
