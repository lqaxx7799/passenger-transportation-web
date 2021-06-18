import { constants, DEFAULT_EMPLOYEE } from '../helpers/constants';
import employeeServices from '../services/employee.services';

const loadAllEmployees = () => {
  return (dispatch) => {
    dispatch({
      type: constants.EMPLOYEE_LOADING,
    });
    return employeeServices
      .loadAllEmployees()
      .then((result) => {
        dispatch({
          type: constants.EMPLOYEE_LOADED,
          payload: result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: constants.EMPLOYEE_LOADED,
          payload: [],
        });
      });
  };
};

const getEmployeeSalaryStatistic = (year, month) => {
  return (dispatch) => {
    dispatch({
      type: constants.EMPLOYEE_SALARY_STATISTIC_LOADING,
    });
    return employeeServices
      .getEmployeeSalaryStatistic(year, month)
      .then((result) => {
        dispatch({
          type: constants.EMPLOYEE_SALARY_STATISTIC_LOADED,
          payload: result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: constants.EMPLOYEE_SALARY_STATISTIC_LOADED,
          payload: [],
        });
      });
  };
};

const initEditingEmployee = (id) => {
  return (dispatch) => {
    dispatch({
      type: constants.EMPLOYEE_LOADING,
    });
    if (!id) {
      return dispatch({
        type: constants.EMPLOYEE_EDITING_LOADED,
        payload: DEFAULT_EMPLOYEE,
      });
    }
    return employeeServices
      .getEmployeeById(id)
      .then((result) => {
        dispatch({
          type: constants.EMPLOYEE_EDITING_LOADED,
          payload: result,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: constants.EMPLOYEE_EDITING_LOADED,
          payload: DEFAULT_EMPLOYEE,
        });
      });
  };
};

const editEmployee = (key, value) => {
  return (dispatch, getState) => {
    const state = getState();
    return dispatch({
      type: constants.EMPLOYEE_EDITING_CHANGED,
      payload: {
        ...state.employeeReducer.editingEmployee,
        [key]: value,
      },
    });
  };
};

const submitEmployee = (employee) => {
  return (dispatch) => {
    if (employee.id) {
      return employeeServices.updateEmployee(employee);
    }
    return employeeServices.addNewEmployee(employee);
  };
};

const deleteEmployee = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    return employeeServices.deleteEmployee(id).then((result) => {
      dispatch({
        type: constants.EMPLOYEE_LOADED,
        payload: state.employeeReducer.employees.filter((employee) => employee.id !== id),
      });
    });
  };
};

export default {
  loadAllEmployees,
  getEmployeeSalaryStatistic,
  initEditingEmployee,
  editEmployee,
  submitEmployee,
  deleteEmployee,
};
