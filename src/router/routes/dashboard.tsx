import { lazyLoad } from '@/router/utils';
import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));

export default [
  {
    path: 'home',
    element: lazyLoad(<Home/>)
  }
];