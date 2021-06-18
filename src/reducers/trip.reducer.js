import { constants } from '../helpers/constants';

const defaultState = {
  loading: false,
  trips: [],
  editingTrip: {},
};

const tripReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.TRIP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case constants.TRIP_LOADED:
      return {
        ...state,
        trips: action.payload,
        loading: false,
      };
    case constants.TRIP_EDITING_LOADED:
      return {
        ...state,
        editingTrip: action.payload,
        loading: false,
      };
    case constants.TRIP_EDITING_CHANGED:
      return {
        ...state,
        editingTrip: action.payload,
      };
    default:
      return state;
  }
};

export default tripReducer;
