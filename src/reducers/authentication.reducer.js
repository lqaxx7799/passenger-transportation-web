import { constants } from '../helpers/constants';

const defaultState = {
  currentAccount: {},
  isValidated: false,
};

const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.AUTHENTICATION_LOGGED_IN:
      return {
        ...state,
        currentAccount: action.payload,
        isValidated: true,
      };
    case constants.AUTHENTICATION_LOGGED_OUT:
      return {
        ...state,
        currentAccount: {},
        isValidated: false,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
