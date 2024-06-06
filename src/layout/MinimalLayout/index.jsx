import { Outlet } from 'react-router-dom';
// project imports
import Customization from '../Customization';
// project imports

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
  <>
    <Outlet />
    <Customization />
  </>
);

export default MinimalLayout;