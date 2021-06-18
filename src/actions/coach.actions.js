import _ from 'lodash';
import { constants, DEFAULT_COACH } from '../helpers/constants';
import coachServices from '../services/coach.services';

const loadAllCoaches = () => {
  return (dispatch) => {
    dispatch({
      type: constants.COACH_LOADING,
    });
    return coachServices
      .loadAllCoaches()
      .then((result) => {
        dispatch({
          type: constants.COACH_LOADED,
          payload: result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: constants.COACH_LOADED,
          payload: [],
        });
      });
  };
};

const getCoachStatistic = (from, to) => {
  return (dispatch) => {
    dispatch({
      type: constants.COACH_STATISTIC_LOADING,
    });
    return coachServices
      .getCoachStatistic(from, to)
      .then((result) => {
        dispatch({
          type: constants.COACH_STATISTIC_LOADED,
          payload: result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: constants.COACH_STATISTIC_LOADED,
          payload: [],
        });
      });
  };
};

const getCoachMaintainanceData = () => {
  return (dispatch) => {
    dispatch({
      type: constants.COACH_MAINTAINANCE_DATA_LOADING,
    });
    return coachServices
      .getCoachMaintainanceData()
      .then((result) => {
        dispatch({
          type: constants.COACH_MAINTAINANCE_DATA_LOADED,
          payload: result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: constants.COACH_MAINTAINANCE_DATA_LOADED,
          payload: [],
        });
      });
  };
};

const initEditingCoach = (id) => {
  return (dispatch) => {
    dispatch({
      type: constants.COACH_LOADING,
    });
    if (!id) {
      return dispatch({
        type: constants.COACH_EDITING_LOADED,
        payload: DEFAULT_COACH,
      });
    }
    return coachServices
      .getCoachById(id)
      .then((result) => {
        dispatch({
          type: constants.COACH_EDITING_LOADED,
          payload: result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: constants.COACH_EDITING_LOADED,
          payload: DEFAULT_COACH,
        });
      });
  };
};

const editCoach = (key, value) => {
  return (dispatch, getState) => {
    const state = getState();
    return dispatch({
      type: constants.COACH_EDITING_CHANGED,
      payload: {
        ...state.coachReducer.editingCoach,
        [key]: value,
      },
    });
  };
};

const submitCoach = (coach) => {
  return (dispatch) => {
    if (coach.id) {
      return coachServices.updateCoach(coach);
    }
    return coachServices.addNewCoach(coach);
  };
};

const deleteCoach = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    return coachServices.deleteCoach(id).then((result) => {
      dispatch({
        type: constants.COACH_LOADED,
        payload: state.coachReducer.coaches.filter((coach) => coach.id !== id),
      });
    });
  };
};

const maintainCoach = () => {
  return (dispatch, getState) => {
    const state = getState();
    return coachServices.updateCoach(_.get(state, 'coachReducer.editingCoach'));
  };
};

export default {
  loadAllCoaches,
  getCoachStatistic,
  getCoachMaintainanceData,
  initEditingCoach,
  editCoach,
  submitCoach,
  maintainCoach,
  deleteCoach,
};
