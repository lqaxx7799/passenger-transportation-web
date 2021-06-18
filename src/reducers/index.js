import { combineReducers } from 'redux';
import authenticationReducer from './authentication.reducer';
import coachReducer from './coach.reducer';
import employeeReducer from './employee.reducer';
import routeReducer from './route.reducer';
import tripReducer from './trip.reducer';

const allReducers = combineReducers({
  authenticationReducer,
  coachReducer,
  employeeReducer,
  routeReducer,
  tripReducer,
});

export default allReducers;
