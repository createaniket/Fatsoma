import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

// project import
import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';
// import MembersLayout from 'layouts/MembersLayout';

// ==============================|| ROUTES ||============================== //

const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

export const routes = [
  {
    exact: 'true',
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    exact: 'true',
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/reset-password-1',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
  },
  {
    exact: 'true',
    path: '/members/add/data/xlss',
    element: lazy(() => import('./views/MemberDashboard/Memberdashboard'))
  },
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/app/admin/dashboard/analytics',
        element: lazy(() => import('./views/dashboard'))
      },





      {
        exact: 'true',
        path: '/trade/contibutions',
        element: lazy(() => import('./views/MemberDashboard/Trade-UI/Memberslist/Memberslist'))
      },


      {
        exact: 'true',
        path: '/trade/contibutions/member',
        element: lazy(() => import('./views/MemberDashboard/Trade-UI/Tradelist/Tradelist'))
      },

      {
        exact: 'true',
        path: '/events/viewall',
        element: lazy(() => import('./views/dashboard/Events/Events'))
      },

      {
        exact: 'true',
        path: '/events/add',
        element: lazy(() => import('./views/dashboard/Events/Addevents/Addevents'))
      },

      {
        exact: 'true',
        path: '/events/hall/add',
        element: lazy(() => import('./views/dashboard/Events/Halls/Addhall'))
      },

      {
        exact: 'true',
        path: '/events/hall/all',
        element: lazy(() => import('./views/dashboard/Events/Halls/Halls'))
      },
      {
        exact: 'true',
        path: '/events/stall/all',
        element: lazy(() => import('./views/dashboard/Events/Stall/AdminstallsLayout/Adminstalls'))
      },
      {
        exact: 'true',
        path: '/sample-page',
        element: lazy(() => import('./views/extra/SamplePage'))
      },
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      },


    ]
  },
];

export default renderRoutes;
