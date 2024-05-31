// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| PAGES MENU ITEMS ||============================== //
// ==============================|| For Login and Resgistration ||============================== //

const pages = {
  id: 'pages',
  title: 'Login or Sign Up',
  caption: 'Authenticate',
  type: 'group',
  children: [
        {
          id: 'login',
          title: 'Login',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Sign Up',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
  ]
};

export default pages;
