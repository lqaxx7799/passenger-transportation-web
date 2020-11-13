import React from 'react';
import { Redirect, Route } from 'react-router';
import { base } from '../services/base.services';
import authenticationServices from '../services/authentication.services';
import MainLayout from './MainLayout';

const AppRoute = ({
  component: Component,
  layout: Layout = MainLayout,
  needAuth: needAuth = true,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        !needAuth || authenticationServices.isAuthenticated()
          ? <Layout><Component {...props} /></Layout>
          : <Redirect to='/login' />
      )}
    />
  );
}

export default AppRoute;