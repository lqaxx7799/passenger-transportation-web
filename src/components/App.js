import React from 'react';
import { Switch } from 'react-router';

import AppRoute from './AppRoute';
import MainLayout from './MainLayout';

import CoachList from './Coach/CoachList';
import CoachCreateForm from './Coach/CoachCreateForm';
import HomePage from './HomePage';

import '../styles/index.scss';

const App = (props) => {
  return (
    <div>
      <Switch>
        <AppRoute path='/coaches' component={CoachList} layout={MainLayout} />
        <AppRoute path='/coach/add' component={CoachCreateForm} layout={MainLayout} />
        <AppRoute exact path='/' component={HomePage} layout={MainLayout} />
      </Switch>
    </div>
  );
}

export default App;