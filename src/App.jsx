import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import router from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import Footer from 'ui-component/Footer';

// ==============================|| APP ||============================== //

//
//App is wrapped in the theme providers, CSS and a BrowserRouter type component 
//RouterProvider is using the routes folder as a 'router' prop. This utilizes the components in the routes folder 
//
const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <RouterProvider router={router} />
        </NavigationScroll>
      </ThemeProvider>

    </StyledEngineProvider>
  );
};

export default App;
