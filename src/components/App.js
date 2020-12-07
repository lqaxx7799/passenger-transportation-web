import React, { useEffect } from 'react';
import { Switch, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

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

import TripList from './Trip/TripList';
import TripForm from './Trip/TripForm';
import TripDetail from './Trip/TripDetail';

import LogIn from './LogIn';
import HomePage from './HomePage';

import CoachStatistic from './Statistic/CoachStatistic';
import EmployeeSalaryStatistic from './Statistic/EmployeeSalaryStatistic';

import '../styles/index.scss';
import authenticationActions from '../actions/authentication.actions';

const App = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    dispatch(authenticationActions.validate()).then(result => {
      if (_.isEmpty(result)) {
        history.push('/login');
      }
    });
  }, []);

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

        <AppRoute path='/trips' component={TripList} layout={MainLayout} />
        <AppRoute path='/trip/add' component={TripForm} layout={MainLayout} />
        <AppRoute path='/trip/:id/edit' component={TripForm} layout={MainLayout} />
        <AppRoute path='/trip/:id' component={TripDetail} layout={MainLayout} />

        <AppRoute path='/statistic/coach' component={CoachStatistic} layout={MainLayout} />
        <AppRoute path='/statistic/employee-salary' component={EmployeeSalaryStatistic} layout={MainLayout} />

        <AppRoute path='/login' component={LogIn} layout={MainLayout} needAuth={false} />
        <AppRoute exact path='/' component={HomePage} layout={MainLayout} />
      </Switch>
    </div>
  );
}

export default App;