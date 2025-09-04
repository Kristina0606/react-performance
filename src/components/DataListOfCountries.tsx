import type { ChangeEvent, FC } from 'react';
import type { CountriesProps, Country } from '../types/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { selectYear } from '../store/selectYearSlice';

const DataListOfCountries: FC<CountriesProps> = ({ countriesList }) => {
  const selectedValue = useSelector((state: RootState) => state.year.year);
  const dispatch = useDispatch();

  let maxKey: string | undefined;
  let maxVal: Country | undefined;
  for (const key in countriesList) {
    const country = countriesList[key];
    if (!maxVal || country.data.length > maxVal.data.length) {
      maxKey = key;
      maxVal = country;
    }
  }
  if (!maxVal || !maxKey) {
    return <div>Нет доступных данных</div>;
  }
  const reversedArr = maxVal.data.slice().reverse();

  const handleSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectYear(Number(evt.target.value)));
  };

  return (
    <div>
      <label htmlFor="mySelect">Choose a year:</label>
      <select id="mySelect" value={selectedValue} onChange={handleSelectChange}>
        {reversedArr.map((i) => (
          <option key={i.year} value={i.year}>
            {i.year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DataListOfCountries;
