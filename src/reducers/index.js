import { combineReducers } from 'redux';
import coachReducer from './coach.reducer';
import employeeReducer from './employee.reducer';
import routeReducer from './route.reducer';
import tripReducer from './trip.reducer';

const allReducers = combineReducers({
  coachReducer,
  employeeReducer,
  routeReducer,
  tripReducer,
});

export default allReducers;