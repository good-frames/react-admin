import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { CustomRoute, routes } from './routes';

const Loading = () => {
  return <div>loading...</div>;
};

const rotuerViews = (routerItems: CustomRoute[]) => {
  return routerItems.map(
    ({ path, component: Component, children, redirect }) => {
      return children && children.length ? (
        <Route
          path={path}
          key={path}
          element={
            <Suspense fallback={<Loading />}>
              <Component />
            </Suspense>
          }
        >
          {rotuerViews(children)}
          {redirect ? (
            <Route path={path} element={<Navigate to={redirect} />}></Route>
          ) : (
            <Route
              path={path}
              element={<Navigate to={children[0].path} />}
            ></Route>
          )}
        </Route>
      ) : (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<Loading />}>
              <Component />
            </Suspense>
          }
        ></Route>
      );
    }
  );
};

export default () => {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname === '/home') {
  //     navigate('/login');
  //   }
  // }, [location]);
  
  return <Routes>{rotuerViews(routes)}</Routes>;
};
