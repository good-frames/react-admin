import { lazy } from 'react';
import { Navigate, RouteObject, RouterProvider, createHashRouter } from 'react-router-dom';
import { lazyLoad } from '@/router/utils';

import permissionRoutes from './routes/permission';
import errorRoutes from './routes/error';

import AuthGuard from './authGuard';
import Layout from '@/layout/index';
const Login = lazy(() => import('@/pages/sys/login'));

const LoginRoute = {
  path: '/login',
  element: lazyLoad(<Login/>)
};

const PAGE_NOT_FOUND_ROUTE = {
  path: '*',
  element: <Navigate to="/404" replace />,
};

const asyncRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <Layout></Layout>
    </AuthGuard>
  ),
  children: [
    {
      index: true,
      element: <Navigate to='/home' replace />
    },
    ...permissionRoutes
  ],
};

export default function Router() {

  const routes = [LoginRoute, asyncRoutes, ...errorRoutes, PAGE_NOT_FOUND_ROUTE];

  const router = createHashRouter(routes as unknown as RouteObject[]);

  return <RouterProvider router={router}></RouterProvider>;
}