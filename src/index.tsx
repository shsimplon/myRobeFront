import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'sanitize.css/sanitize.css';

import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import reportWebVitals from 'reportWebVitals';

// Initialize languages
import './locales/i18n';
import { ThemeProvider } from 'styled-components';
import theme from './styles/stylesheets';
import store from 'app/store/store';
import { userServices } from 'services';
import { login, logout } from 'features/user.slice';
import { useEffect } from 'react';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const isAuth = async () => {
  try {
    const response = await userServices.isAuth();
    console.log('response', response);

    store.dispatch(login(response.data));
  } catch (error: any) {
    store.dispatch(logout());
  }
};

(async () => {
  await isAuth();
  ReactDOM.render(
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </React.StrictMode>
      </HelmetProvider>
    </Provider>,
    MOUNT_NODE,
  );
})();

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
