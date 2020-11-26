import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import MainLayout from './MainLayout';
import { getToken } from '../services/base.services';

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
        !needAuth || !!getToken()
          ? <Layout><Component {...props} /></Layout>
          : <Redirect to='/login' />
      )}
    />
  );
}

export default AppRoute;