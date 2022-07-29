/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/index.scss';
import { useSelector } from 'react-redux';
import { userStore } from 'types/user';
import ModaleAuthentification from './pages/pageAuthentification/form/modaleAuthentification';

import { AccueilPage } from './pages/AccueilPage/Loadable';
import HomeAdmin from './pages/AdminPage/HomeAdmin';
import Home from './components/templates/Home';
import DressDetails from './pages/pageDresses/DressDetails';

export function App({}) {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Routes>
        <Route path="/" element={<AccueilPage />} />
        <Route
          path="/admin"
          element={<PrivateRouteAdmin component={<HomeAdmin />} />}
        />
        <Route path="/authentification/" element={<ModaleAuthentification />} />
        {/* <Route
          path="/robe/detail/:id"
          element={<DressDetails dress={dress} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
const PrivateRoute = ({ component: Component }: { component: JSX.Element }) => {
  const userState = useSelector((state: { user: userStore }) => state.user);
  return !userState.isLogged ? <Home /> : Component;
};
const PrivateRouteAdmin = ({
  component: Component,
}: {
  component: JSX.Element;
}) => {
  const userState = useSelector((state: { user: userStore }) => state.user);
  return userState.isLogged && userState.user?.role === ('A' as any) ? (
    Component
  ) : (
    <Home />
  );
};
