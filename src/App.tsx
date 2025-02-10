import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import store from './store';
import AppRoutes from './routes';
import SnackbarProvider from './components/generic-components/SnackbarProvider/SnackbarProvider';
import createEmotionCache from './utils/createEmotionCache';
import theme from './utils/theme';

const clientSideEmotionCache = createEmotionCache();

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;