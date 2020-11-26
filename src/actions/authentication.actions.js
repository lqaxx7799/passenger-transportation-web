import _ from 'lodash';
import { constants } from "../helpers/constants";
import authenticationServices from "../services/authentication.services";
import { setToken } from "../services/base.services";

const validate = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (_.get(state, 'authenticationState.isValidated')) {
      return new Promise((resolve, reject) => resolve(_.get(state, 'authenticationState.currentAccount')))
    }
    return authenticationServices.validate()
      .then(result => {
        dispatch({
          type: constants.AUTHENTICATION_LOGGED_IN,
          payload: result,
        });
        return result;
      })
      .catch(error => {
        dispatch({
          type: constants.AUTHENTICATION_LOGGED_OUT,
        });
        return {};
      });
  }
}

const logIn = (username, password) => {
  return (dispatch) => {
    return authenticationServices.logIn(username, password)
      .then(result => {
        if (result.status === 401) {
          throw new Error(result);
        }
        setToken(result.token);
        dispatch(validate());
        return result;
      });
  }
}

const authenticationActions = {
  logIn,
  validate,
};

export default authenticationActions;