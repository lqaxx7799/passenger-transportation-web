import { base } from './base.services';

const loadAllEmployees = () => {
  return base.requests.get('/employee');
}

const getEmployeeById = (id) => {
  return base.requests.get(`/employee/${id}`);
}

const getEmployeeSalaryStatistic = (year, month) => {
  return base.requests.get(`/salary_statistic/${year}/${month}`);
}

const addNewEmployee = (employee) => {
  return base.requests.post('/employee', employee);
}

const updateEmployee = (employee) => {
  return base.requests.put(`/employee/${employee.id}`, employee);
}

const deleteEmployee = (id) => {
  return base.requests.del(`/employee/${id}`);
}

export default {
  loadAllEmployees,
  getEmployeeById,
  getEmployeeSalaryStatistic,
  addNewEmployee,
  updateEmployee,
  deleteEmployee,
}