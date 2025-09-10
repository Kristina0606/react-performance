import type { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import type { SkeletonCountryLoaderProps } from '../types/interfaces';

export const SkeletonCountryLoader: FC<SkeletonCountryLoaderProps> = ({
  count,
}) => <Skeleton height="100%" width="100%" borderRadius={6} count={count} />;
