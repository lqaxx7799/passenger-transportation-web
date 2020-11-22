import React from 'react';
import { Switch } from 'react-router';

import AppRoute from './AppRoute';
import MainLayout from './MainLayout';
import BlankLayout from './BlankLayout';

import CoachList from './Coach/CoachList';
import CoachForm from './Coach/CoachForm';
import CoachDetail from './Coach/CoachDetail';

import EmployeeList from './Employee/EmployeeList';
import EmployeeForm from './Employee/EmployeeForm';
import EmployeeDetail from './Employee/EmployeeDetail';

import RouteList from './Route/RouteList';
import RouteForm from './Route/RouteForm';
import RouteDetail from './Route/RouteDetail';

import LogIn from './LogIn';
import HomePage from './HomePage';

import '../styles/index.scss';

const App = (props) => {
  return (
    <div>
      <Switch>
        <AppRoute path='/coaches' component={CoachList} layout={MainLayout} />
        <AppRoute path='/coach/add' component={CoachForm} layout={MainLayout} />
        <AppRoute path='/coach/:id/edit' component={CoachForm} layout={MainLayout} />
        <AppRoute path='/coach/:id' component={CoachDetail} layout={MainLayout} />

        <AppRoute path='/employees' component={EmployeeList} layout={MainLayout} />
        <AppRoute path='/employee/add' component={EmployeeForm} layout={MainLayout} />
        <AppRoute path='/employee/:id/edit' component={EmployeeForm} layout={MainLayout} />
        <AppRoute path='/employee/:id' component={EmployeeDetail} layout={MainLayout} />

        <AppRoute path='/routes' component={RouteList} layout={MainLayout} />
        <AppRoute path='/route/add' component={RouteForm} layout={MainLayout} />
        <AppRoute path='/route/:id/edit' component={RouteForm} layout={MainLayout} />
        <AppRoute path='/route/:id' component={RouteDetail} layout={MainLayout} />

        

        <AppRoute path='/login' component={LogIn} layout={MainLayout} needAuth={false} />
        <AppRoute exact path='/' component={HomePage} layout={MainLayout} />
      </Switch>
    </div>
  );
}

export default App;