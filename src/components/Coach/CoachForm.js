import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router";
import _ from 'lodash';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  DatePicker,
  DatePickerInput,
  Form,
  TextArea,
  TextInput
} from 'carbon-components-react';

import coachActions from '../../actions/coach.actions';
import commonActions from '../../actions/common.actions';

const CoachForm = (props) => {
  const coachState = useSelector(state => state.coachReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const coachId = props.match.params.id;
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(coachActions.initEditingCoach(coachId));
  }, []);

  const { editingCoach, loading } = coachState;

  const onEditCoach = (key, value) => {
    dispatch(coachActions.editCoach(key, value));
  }

  const submitCoach = () => {
    dispatch(coachActions.submitCoach(editingCoach)).then(result => {
      history.push('/coaches');
    })
      .catch(error => {
        if (_.get(error, 'response.data.Errors')) {
          setErrors(error.response.data.Errors);
        } else if (_.get(error, 'response.data.Cause')) {
          setErrors([error.response.data.Cause]);
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
              <Link to="/coaches">Back to list</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Add new coach
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
            <h3>Basic Information</h3>
            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Coach Model"
                  placeholder="Insert coach model"
                  value={editingCoach.coachModel}
                  onChange={(e) => onEditCoach('coachModel', e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Coach Version"
                  placeholder="Insert coach version"
                  value={editingCoach.coachVersion}
                  onChange={(e) => onEditCoach('coachVersion', e.target.value)}
                />
              </div>
            </div>

            <h3>Specifications</h3>
            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Manufacturer Name"
                  placeholder="Insert manufacturer name"
                  value={editingCoach.manufacturerName}
                  onChange={(e) => onEditCoach('manufacturerName', e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="License Plate"
                  placeholder="Insert license plate"
                  value={editingCoach.licensePlate}
                  onChange={(e) => onEditCoach('licensePlate', e.target.value)}
                />
              </div>
            </div>
            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Color"
                  placeholder="Insert color"
                  value={editingCoach.color}
                  onChange={(e) => onEditCoach('color', e.target.value)}
                />
              </div>

              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Number Of Seats"
                  placeholder="Insert number of seats"
                  value={editingCoach.numberOfSeats}
                  onChange={(e) => onEditCoach('numberOfSeats', e.target.value)}
                />
              </div>
            </div>

            <h3>Conditions</h3>
            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Used Years"
                  placeholder="Insert used years"
                  value={editingCoach.usedYears}
                  onChange={(e) => onEditCoach('usedYears', e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <DatePicker
                  dateFormat="Y-m-d"
                  datePickerType="single"
                  onSelect={(e) => onEditCoach('lastMaintainedDate', e.target.value)}
                >
                  <DatePickerInput
                    id="date-picker-default-id"
                    placeholder="yyyy-mm-dd"
                    labelText="Last Maintained Date"
                    type="text"
                    value={editingCoach.lastMaintainedDate}
                  />
                </DatePicker>
              </div>
            </div>

            <Button
              kind="primary"
              tabIndex={0}
              type="button"
              onClick={submitCoach}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CoachForm;