import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import _ from 'lodash';
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

import tripActions from '../../actions/trip.actions';
import routeActions from '../../actions/route.actions';
import coachActions from '../../actions/coach.actions';
import employeeActions from '../../actions/employee.actions';
import commonActions from '../../actions/common.actions';

const TripForm = (props) => {
  const tripState = useSelector(state => state.tripReducer);
  const coachState = useSelector(state => state.coachReducer);
  const routeState = useSelector(state => state.routeReducer);
  const employeeState = useSelector(state => state.employeeReducer);

  const dispatch = useDispatch();
  const history = useHistory();
  
  const tripId = props.match.params.id;
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(tripActions.initEditingTrip(tripId));
    dispatch(routeActions.loadAllRoutes());
    dispatch(coachActions.loadAllCoaches());
    dispatch(employeeActions.loadAllEmployees());
  }, []);

  const { editingTrip, loading: loadingTrip } = tripState;
  const { routes, loading: loadingRoutes } = routeState;
  const { employees, loading: loadingEmployees } = employeeState;
  const { coaches, loading: loadingCoaches } = coachState;

  const loading = loadingTrip || loadingRoutes || loadingEmployees || loadingCoaches;

  const onEditTrip = (key, value) => {
    dispatch(tripActions.editTrip(key, value));
  }

  const submitTrip = () => {
    dispatch(tripActions.submitTrip(editingTrip)).then(result => {
      history.push('/trips');
    })
      .catch(error => {
        if (_.get(error, 'response.data.Errors')) {
          setErrors(error.response.data.Errors);
        } else {
          alert('There was an error');
        }
      });
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
              <Link to="/trips">Back to list</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Add new trip
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16" style={{ color: 'red' }}>
          <ul>
            {_.map(errors, (error, index) => <li key={index}>{error}</li>)}
          </ul>
        </div>
      </div>
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Form>
            <h3>Trip Information</h3>
            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-6">
                <DatePicker
                  dateFormat="Y-m-d"
                  datePickerType="single"
                  onSelect={(e) => onEditTrip('arrivalTime', e.target.value)}
                >
                  <DatePickerInput
                    id="date-picker-default-id"
                    placeholder="yyyy-mm-dd"
                    labelText="Arrival Time"
                    type="text"
                    value={editingTrip.arrivalTime}
                  />
                </DatePicker>
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-6">
                <DatePicker
                  dateFormat="Y-m-d"
                  datePickerType="single"
                  onSelect={(e) => onEditTrip('departureTime', e.target.value)}
                >
                  <DatePickerInput
                    id="date-picker-default-id"
                    placeholder="yyyy-mm-dd"
                    labelText="Departure Time"
                    type="text"
                    value={editingTrip.departureTime}
                  />
                </DatePicker>
              </div>
            </div>

            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-6">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Ticket Price"
                  placeholder="Insert ticket price"
                  value={editingTrip.ticketPrice}
                  onChange={(e) => onEditTrip('ticketPrice', e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-6">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Number of Passengers"
                  placeholder="Insert number of passengers"
                  value={editingTrip.numberOfPassengers}
                  onChange={(e) => onEditTrip('numberOfPassengers', e.target.value)}
                />
              </div>
            </div>
            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-6">
                <Select
                  invalidText="Invalid error message."
                  labelText="Coach"
                  value={_.get(editingTrip, 'coach.id')}
                  onChange={(e) => onEditTrip('coach', e.target.value)}
                >
                   <SelectItem
                      key="0"
                      text="- Select coach -"
                      value=""
                    />
                  {_.map(coaches, (coach, index) => (
                    <SelectItem
                      key={index}
                      text={_.get(coach, 'coachModel')}
                      value={_.get(coach, 'id')}
                    />
                  ))}
                </Select>
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-6">
                <Select
                  invalidText="Invalid error message."
                  labelText="Route"
                  value={_.get(editingTrip, 'route.id')}
                  onChange={(e) => onEditTrip('route', e.target.value)}
                >
                  <SelectItem
                      key="0"
                      text="- Select route -"
                      value=""
                    />
                  {_.map(routes, (route, index) => (
                    <SelectItem
                      key={index}
                      text={`${_.get(route, 'startingPoint')} - ${_.get(route, 'destinationPoint')}`}
                      value={_.get(route, 'id')}
                    />
                  ))}
                </Select>
              </div>
            </div>
            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-6">
                <Select
                  invalidText="Invalid error message."
                  labelText="Driver"
                  value={_.get(editingTrip ,'employee1.id')}
                  onChange={(e) => onEditTrip('employee1', e.target.value)}
                >
                  <SelectItem
                      key="0"
                      text="- Select driver -"
                      value=""
                    />
                  {_.map(employees, (employee, index) => (
                    <SelectItem
                      key={index}
                      text={_.get(employee, 'employeeName')}
                      value={_.get(employee, 'id')}
                    />
                  ))}
                </Select>
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-6">
                <Select
                  invalidText="Invalid error message."
                  labelText="Assistant"
                  value={_.get(editingTrip, 'employee2.id')}
                  onChange={(e) => onEditTrip('employee2', e.target.value)}
                >
                  <SelectItem
                      key="0"
                      text="- Select assistant -"
                      value=""
                    />
                  {_.map(employees, (employee, index) => (
                    <SelectItem
                      key={index}
                      text={_.get(employee, 'employeeName')}
                      value={_.get(employee, 'id')}
                    />
                  ))}
                </Select>
              </div>
            </div>

            <Button
              kind="primary"
              tabIndex={0}
              type="button"
              onClick={submitTrip}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default TripForm;