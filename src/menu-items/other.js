//Controls the sample items on the side menu. 
// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  title: 'More Information',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Info Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'evergreen-web',
      title: 'Learn more about Evergreen',
      type: 'item',
      url: 'https://evergreen.insightglobal.com/technology-services/',
      icon: icons.IconHelp,
      external: true,
      target: true
    }
  ]
};

export default other;
