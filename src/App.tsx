import React from 'react';
import Axios from "axios";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import store from './store';
import AppRoutes from './routes';
import SnackbarProvider from './components/generic-components/SnackbarProvider/SnackbarProvider';
import createEmotionCache from './utils/createEmotionCache';
import theme from './utils/theme';
import { CookiesProvider } from 'react-cookie';

const clientSideEmotionCache = createEmotionCache();

Axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_BASE_URL;
Axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
   
    <Provider store={store}>
       <CookiesProvider>
      <BrowserRouter>
        <CacheProvider value={clientSideEmotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
              <AppRoutes />
            </SnackbarProvider>
          </ThemeProvider>
        </CacheProvider>
      </BrowserRouter>
      </CookiesProvider>
    </Provider>

  );
};

export default App;