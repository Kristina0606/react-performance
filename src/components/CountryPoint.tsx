import type { FC } from 'react';
import countryImg from '../assets/web_13293948.png';
import type { CountryPointProps } from '../types/interfaces';

const CountryPoint: FC<CountryPointProps> = ({ code, countriesList }) => {
  return (
    <div className="text-left w-150 cursor-pointer border border-gray-300 rounded-md p-4 hover:bg-blue-200 duration-300">
      <figure className="flex gap-1 items-center">
        <img src={countryImg} alt="country-icon" className="w-7 h h-7" />
        <figcaption>{code}</figcaption>
      </figure>

      <p>
        iso code:&nbsp;
        {countriesList[code]['iso_code']
          ? countriesList[code]['iso_code']
          : '- '}
      </p>
      <p>
        population:&nbsp;
        {countriesList[code].data.at(-1)?.population
          ? countriesList[code].data.at(-1)?.population
          : 'N/A'}
      </p>
    </div>
  );
};

export default CountryPoint;
