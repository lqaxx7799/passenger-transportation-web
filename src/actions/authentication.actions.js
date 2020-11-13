import { constants } from "../helpers/constants";
import authenticationServices from "../services/authentication.services";
import { setToken } from "../services/base.services";

const logIn = (username, password) => {
  return (dispatch) => {
    return authenticationServices.logIn(username, password)
      .then(result => {
        if (result.status === 401) {
          throw new Error(result);
        }
        setToken(result.token);
        dispatch({
          type: constants.AUTHENTICATION_LOGGED_IN,
        })
        return result;
      });
  }
}

const authenticationActions = {
  logIn,
};

export default authenticationActions;