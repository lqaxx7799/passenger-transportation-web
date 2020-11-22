import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  DatePicker,
  DatePickerInput,
  Form,
  Select,
  SelectItem,
  TextArea,
  TextInput
} from 'carbon-components-react';

import employeeActions from '../../actions/employee.actions';
import commonActions from '../../actions/common.actions';

const EmployeeForm = (props) => {
  const employeeState = useSelector(state => state.employeeReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const employeeId = props.match.params.id;
  // const [coach, setCoach] = useState({});

  useEffect(() => {
    dispatch(employeeActions.initEditingEmployee(employeeId));
  }, []);

  const { editingEmployee, loading } = employeeState;

  const onEditEmployee = (key, value) => {
    dispatch(employeeActions.editEmployee(key, value));
  }

  const submitEmployee = () => {
    dispatch(employeeActions.submitEmployee(editingEmployee)).then(result => {
      history.push('/employees');
    }).catch(error => alert('There was an error'));
  }

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <Link to="/employees">Back to list</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Add new employee
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Form>
            <h3>Basic Information</h3>
            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Employee Name"
                  placeholder="Insert employee name"
                  value={editingEmployee.employeeName}
                  onChange={(e) => onEditEmployee('employeeName', e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Identification Number"
                  placeholder="Insert identification number"
                  value={editingEmployee.identificationNumber}
                  onChange={(e) => onEditEmployee('identificationNumber', e.target.value)}
                />
              </div>
            </div>

            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <Select
                  invalidText="Invalid error message."
                  labelText="Gender"
                  value={editingEmployee.gender}
                  onChange={(e) => onEditEmployee('gender', e.target.value)}
                >
                  <SelectItem text="Choose a gender" value="" />
                  <SelectItem text="Male" value="Male" />
                  <SelectItem text="Female" value="Female" />
                  <SelectItem text="Other" value="Other" />
                </Select>
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <DatePicker
                  dateFormat="Y-m-d"
                  datePickerType="single"
                  onSelect={(e) => onEditEmployee('dateOfBirth', e.target.value)}
                >
                  <DatePickerInput
                    id="date-picker-default-id"
                    placeholder="yyyy-mm-dd"
                    labelText="Date of Birth"
                    type="text"
                    value={editingEmployee.dateOfBirth}
                  />
                </DatePicker>
              </div>
            </div>

            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-16">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Address"
                  placeholder="Insert address"
                  value={editingEmployee.address}
                  onChange={(e) => onEditEmployee('address', e.target.value)}
                />
              </div>
            </div>


            <h3>Skill</h3>
            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-6">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="License Code"
                  placeholder="Insert license code"
                  value={editingEmployee.licenseCode}
                  onChange={(e) => onEditEmployee('licenseCode', e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-6">
                <Select
                  invalidText="Invalid error message."
                  labelText="License Type"
                  value={editingEmployee.licenseType}
                  onChange={(e) => onEditEmployee('licenseType', e.target.value)}
                >
                  <SelectItem text="Choose license type" value="" />
                  <SelectItem text="A1" value="A1" />
                  <SelectItem text="A2" value="A2" />
                  <SelectItem text="A3" value="A3" />
                  <SelectItem text="A4" value="A4" />
                  <SelectItem text="B1" value="B1" />
                  <SelectItem text="B2" value="B2" />
                  <SelectItem text="C" value="C" />
                  <SelectItem text="D" value="D" />
                  <SelectItem text="E" value="E" />
                  <SelectItem text="F" value="F" />
                </Select>
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-4">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Seniority"
                  placeholder="Insert seniority"
                  value={editingEmployee.seniority}
                  onChange={(e) => onEditEmployee('seniority', e.target.value)}
                />
              </div>
            </div>

            <Button
              kind="primary"
              tabIndex={0}
              type="button"
              onClick={submitEmployee}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default EmployeeForm;