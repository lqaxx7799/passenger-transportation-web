import { constants } from '../helpers/constants';

const defaultState = {
  loading: false,
  employees: [],
  editingEmployee: {},
  statistic: [],
};

const employeeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.EMPLOYEE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case constants.EMPLOYEE_LOADED:
      return {
        ...state,
        employees: action.payload,
        loading: false,
      };
    case constants.EMPLOYEE_SALARY_STATISTIC_LOADING:
      return {
        ...state,
        loading: true,
      };
    case constants.EMPLOYEE_SALARY_STATISTIC_LOADED:
      return {
        ...state,
        statistic: action.payload,
        loading: false,
      };
    case constants.EMPLOYEE_EDITING_LOADED:
      return {
        ...state,
        editingEmployee: action.payload,
        loading: false,
      };
    case constants.EMPLOYEE_EDITING_CHANGED:
      return {
        ...state,
        editingEmployee: action.payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;
