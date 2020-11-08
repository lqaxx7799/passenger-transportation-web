import { constants } from '../helpers/constants';

const defaultState = {
  loading: false,
  coaches: [],
};

const coachReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.COACH_LOADING: 
      return {
        ...state,
        loading: true,
      } 
    case constants.COACH_LOADED: 
      return {
        ...state,
        coaches: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default coachReducer;