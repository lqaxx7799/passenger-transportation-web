import { constants } from '../helpers/constants';

const defaultState = {
  loading: false,
  coaches: [],
  editingCoach: {},
  statistic: [],
};

const coachReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.COACH_LOADING: 
      return {
        ...state,
        loading: true,
      };
    case constants.COACH_LOADED: 
      return {
        ...state,
        coaches: action.payload,
        loading: false,
      };
    case constants.COACH_STATISTIC_LOADING: 
      return {
        ...state,
        loading: true,
      } 
    case constants.COACH_STATISTIC_LOADED: 
      return {
        ...state,
        statistic: action.payload,
        loading: false,
      };
    case constants.COACH_EDITING_LOADED:
      return {
        ...state,
        editingCoach: action.payload,
        loading: false,
      }
    case constants.COACH_EDITING_CHANGED:
      return {
        ...state,
        editingCoach: action.payload,
      }
    default:
      return state;
  }
}

export default coachReducer;