import { lazyLoad } from '@/router/utils';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home'));
const Test = lazy(() => import('@/pages/test'));
const SubHome = lazy(() => import('@/pages/subhome'));

export default [
  {
    path: 'home',
    children: [
      {
        index: true,
        element: <Navigate to='subhome1' replace />
      },
      {
        path: 'subhome1',
        element: lazyLoad(<Home/>)
      },
      {
        path: 'subhome2',
        element: lazyLoad(<SubHome/>)
      },
    ]
  },
  {
    path: 'home2',
    children: [
      {
        index: true,
        element: <Navigate to='subhome21' replace />
      },
      {
        path: 'subhome21',
        element: lazyLoad(<Home/>)
      },
      {
        path: 'subhome22',
        element: lazyLoad(<SubHome/>)
      },
    ]
  },
  {
    path: 'test',
    element: lazyLoad(<Test/>)
  }
];