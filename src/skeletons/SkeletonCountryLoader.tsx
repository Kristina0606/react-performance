import type { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import type { SkeletonCountryLoaderProps } from '../types/interfaces';

export const SkeletonCountryLoader: FC<SkeletonCountryLoaderProps> = ({
  count,
}) => <Skeleton height={113.19} width={600} borderRadius={6} count={count} />;
