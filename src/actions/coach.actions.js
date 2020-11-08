import { constants } from "../helpers/constants";
import coachServices from '../services/coach.services';

const loadAllCoaches = () => {
  return (dispatch) => {
    dispatch({
      type: constants.COACH_LOADING,
    });
    return coachServices.loadAllCoaches().then(result => {
      dispatch({
        type: constants.COACH_LOADED,
        payload: result,
      });
    }).catch(error => {
      console.log(error);
      dispatch({
        type: constants.COACH_LOADED,
        payload: [],
      });
    });
  }
}

export default {
  loadAllCoaches,
};