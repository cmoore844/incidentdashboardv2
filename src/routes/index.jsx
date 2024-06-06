import { createBrowserRouter } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

//Setting routes or route files in an array to be exported into the variable 'router'. 
const router = createBrowserRouter([MainRoutes, LoginRoutes], {
  basename: ''
});

export default router;
