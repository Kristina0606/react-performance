import type { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { selectYear } from '../store/selectYearSlice';
import { useGetCountryByCodeQuery } from '../api/co2Api';

const DataListOfCountries: FC = () => {
  const selectedValue = useSelector((state: RootState) => state.year.year);
  const dispatch = useDispatch();

  const { data } = useGetCountryByCodeQuery('Antarctica');
  const reversedArr = data?.data.slice().reverse();

  const handleSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectYear(Number(evt.target.value)));
  };

  return (
    <div>
      <label htmlFor="mySelect">Choose a year:</label>
      <select id="mySelect" value={selectedValue} onChange={handleSelectChange}>
        {reversedArr?.map((i) => (
          <option key={i.year} value={i.year}>
            {i.year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DataListOfCountries;
