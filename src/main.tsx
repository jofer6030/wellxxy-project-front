import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './redux/store';
import { theme } from './config/theme';
import RouterApp from './router';

import './assets/styles/index.scss';

const clientId = '1089162439818-ap9m4c845mu1s06pk6mbb1foo392b6nk.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientId}>
        <ThemeProvider theme={theme}>
          <RouterApp />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
