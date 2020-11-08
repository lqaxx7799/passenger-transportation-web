import { combineReducers } from 'redux';
import coachReducer from './coach.reducer';

const allReducers = combineReducers({
  coachReducer,
});

export default allReducers;