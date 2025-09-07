import type { FC } from 'react';
import AZImg from '../assets/sort_1272415.png';
import { useDispatch } from 'react-redux';
import { isSortedToggle } from '../store/sortSlice';

const AZSort: FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(isSortedToggle())}>
        <img src={AZImg} alt="sort-img" className="w-5 cursor-pointer" />
      </button>
    </>
  );
};

export default AZSort;
