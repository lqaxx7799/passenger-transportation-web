import React from 'react';
import { Switch } from 'react-router';

import AppRoute from './AppRoute';
import MainLayout from './MainLayout';

import CoachList from './Coach/CoachList';
import CoachForm from './Coach/CoachForm';
import CoachDetail from './Coach/CoachDetail';
import HomePage from './HomePage';

import '../styles/index.scss';
import LogIn from './LogIn';
import BlankLayout from './BlankLayout';

const App = (props) => {
  return (
    <div>
      <Switch>
        <AppRoute path='/coaches' component={CoachList} layout={MainLayout} />
        <AppRoute path='/coach/add' component={CoachForm} layout={MainLayout} />
        <AppRoute path='/coach/:id/edit' component={CoachForm} layout={MainLayout} />
        <AppRoute path='/coach/:id' component={CoachDetail} layout={MainLayout} />
        <AppRoute path='/login' component={LogIn} layout={MainLayout} needAuth={false} />
        <AppRoute exact path='/' component={HomePage} layout={MainLayout} />
      </Switch>
    </div>
  );
}

export default App;