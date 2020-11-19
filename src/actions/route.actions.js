import { constants, DEFAULT_ROUTE } from "../helpers/constants";
import routeServices from '../services/route.services';

const loadAllRoutes = () => {
  return (dispatch) => {
    dispatch({
      type: constants.ROUTE_LOADING,
    });
    return routeServices.loadAllRoutes().then(result => {
      dispatch({
        type: constants.ROUTE_LOADED,
        payload: result,
      });
    }).catch(error => {
      console.log(error);
      dispatch({
        type: constants.ROUTE_LOADED,
        payload: [],
      });
    });
  }
}

const initEditingRoute = (id) => {
  return (dispatch) => {
    dispatch({
      type: constants.ROUTE_LOADING,
    });
    if (!id) {
      return dispatch({
        type: constants.ROUTE_EDITING_LOADED,
        payload: DEFAULT_ROUTE,
      });
    }
    return routeServices.getRouteById(id).then(result => {
      dispatch({
        type: constants.ROUTE_EDITING_LOADED,
        payload: result,
      });
    }).catch(error => {
      console.log(error);
      dispatch({
        type: constants.ROUTE_EDITING_LOADED,
        payload: DEFAULT_ROUTE,
      });
    });
  }
}

const editRoute = (key, value) => {
  return (dispatch, getState) => {
    const state = getState();
    return dispatch({
      type: constants.ROUTE_EDITING_CHANGED,
      payload: {
        ...state.routeReducer.editingRoute,
        [key]: value,
      }
    });
  }
}

const submitRoute = (route) => {
  return (dispatch) => {
    if (route.id) {
      return routeServices.updateRoute(route);
    }
    return routeServices.addNewRoute(route);
  }
}

const deleteRoute = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    return routeServices.deleteRoute(id).then(result => {
      dispatch({
        type: constants.ROUTE_LOADED,
        payload: state.routeReducer.routes.filter(route => route.id !== id),
      });
    });
  }
}

export default {
  loadAllRoutes,
  initEditingRoute,
  editRoute,
  submitRoute,
  deleteRoute,
};