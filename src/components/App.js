import React from 'react';
import { Switch } from 'react-router';

import AppRoute from './AppRoute';
import MainLayout from './MainLayout';

import CoachList from './Coach/CoachList';
import HomePage from './HomePage';

const App = (props) => {
  return (
    <div>
      <Switch>
        <AppRoute path='/coach' component={CoachList} layout={MainLayout} />
        <AppRoute exact path='/' component={HomePage} layout={MainLayout} />
      </Switch>
    </div>
  );
}

export default App;