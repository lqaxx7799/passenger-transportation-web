import { constants } from '../helpers/constants';

const defaultState = {
  loading: false,
  routes: [],
  editingRoute: {},
};

const routeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.ROUTE_LOADING: 
      return {
        ...state,
        loading: true,
      } 
    case constants.ROUTE_LOADED: 
      return {
        ...state,
        routes: action.payload,
        loading: false,
      };
    case constants.ROUTE_EDITING_LOADED:
      return {
        ...state,
        editingRoute: action.payload,
        loading: false,
      }
    case constants.ROUTE_EDITING_CHANGED:
      return {
        ...state,
        editingRoute: action.payload,
      }
    default:
      return state;
  }
}

export default routeReducer;