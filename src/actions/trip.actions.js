import { constants, DEFAULT_TRIP } from '../helpers/constants';
import tripServices from '../services/trip.services';

const loadAllTrips = () => {
  return (dispatch) => {
    dispatch({
      type: constants.TRIP_LOADING,
    });
    return tripServices
      .loadAllTrips()
      .then((result) => {
        dispatch({
          type: constants.TRIP_LOADED,
          payload: result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: constants.TRIP_LOADED,
          payload: [],
        });
      });
  };
};

const initEditingTrip = (id) => {
  return (dispatch) => {
    dispatch({
      type: constants.TRIP_LOADING,
    });
    if (!id) {
      return dispatch({
        type: constants.TRIP_EDITING_LOADED,
        payload: DEFAULT_TRIP,
      });
    }
    return tripServices
      .getTripById(id)
      .then((result) => {
        dispatch({
          type: constants.TRIP_EDITING_LOADED,
          payload: {
            ...result,
            coach: { id: result.coach.id },
            employee1: { id: result.employee1.id },
            employee2: { id: result.employee2.id },
            route: { id: result.coach.id },
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: constants.TRIP_EDITING_LOADED,
          payload: DEFAULT_TRIP,
        });
      });
  };
};

const editTrip = (key, value) => {
  return (dispatch, getState) => {
    const state = getState();
    if (key === 'coach' || key === 'route' || key === 'employee1' || key === 'employee2') {
      value = {
        id: value,
      };
    }
    return dispatch({
      type: constants.TRIP_EDITING_CHANGED,
      payload: {
        ...state.tripReducer.editingTrip,
        [key]: value,
      },
    });
  };
};

const submitTrip = (trip) => {
  return (dispatch) => {
    if (trip.id) {
      return tripServices.updateTrip(trip);
    }
    trip = {
      ...trip,
    };
    return tripServices.addNewTrip(trip);
  };
};

const deleteTrip = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    return tripServices.deleteTrip(id).then((result) => {
      dispatch({
        type: constants.TRIP_LOADED,
        payload: state.tripReducer.trips.filter((trip) => trip.id !== id),
      });
    });
  };
};

export default {
  loadAllTrips,
  initEditingTrip,
  editTrip,
  submitTrip,
  deleteTrip,
};
