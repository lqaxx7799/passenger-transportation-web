import React from 'react';
import { Redirect, Route } from 'react-router';
import MainLayout from './MainLayout';

const AppRoute = ({
  component: Component,
  layout: Layout = MainLayout,
  auth: auth = true,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        auth
          ? <Layout><Component {...props} /></Layout>
          : <Redirect to='/login' />
      )}
    />
  );
}

export default AppRoute;