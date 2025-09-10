import { useMemo, type FC } from 'react';
import countryImg from '../assets/web_13293948.png';
import type { CountryPointProps } from '../types/interfaces';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const CountryPoint: FC<CountryPointProps> = ({ code, countriesList }) => {
  const currentYear = useSelector((state: RootState) => state.year.year);
  const dataForYear = useMemo(
    () => countriesList[code].data.find((entry) => entry.year === currentYear),
    [countriesList, code, currentYear]
  );
  const population = dataForYear?.population ?? 'N/A';
  return (
    <Link to={`/${code}`}>
      <figure className="flex gap-1 items-center">
        <img src={countryImg} alt="country-icon" className="w-7 h-7" />
        <figcaption>{code}</figcaption>
      </figure>

      <p>
        iso code:&nbsp;
        {countriesList[code]['iso_code']
          ? countriesList[code]['iso_code']
          : '- '}
      </p>
      <p>
        population for {currentYear}:&nbsp;
        {population}
      </p>
    </Link>
  );
};

export default CountryPoint;
