import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

// Routing to pages based on the authentication routing. MinimalLayout is the main component 
// while AuthLogin and AuthRegister are the redirection
// components that are used when person needs to login or register as user 

//Root dir is the dashboard layout while the auth components are children of the root dir

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/pages/login/login3',
      element: <AuthLogin3 />
    },
    {
      path: '/pages/register/register3',
      element: <AuthRegister3 />
    }
  ]
};

export default AuthenticationRoutes;
