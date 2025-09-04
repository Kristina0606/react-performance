import type { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { selectCountry } from '../store/selectCountrySlice';

const SearchCountry: FC = () => {
  const currentCountry = useSelector(
    (state: RootState) => state.country.country
  );
  const dispatch = useDispatch();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(selectCountry(evt.target.value));
  };
  return (
    <input
      type="text"
      placeholder="Поиск..."
      value={currentCountry}
      onChange={handleInputChange}
      className="border border-gray-300 w-150 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchCountry;
