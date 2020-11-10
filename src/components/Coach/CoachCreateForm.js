import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router";
import coachActions from '../../actions/coach.actions';
import { Breadcrumb, BreadcrumbItem, Button, DatePicker, DatePickerInput, Form, TextArea, TextInput } from 'carbon-components-react';

const defaultCoach = {
  coachModel: '',
  coachVersion: '',
  licensePlate: '',
  color: '',
  manufacturerName: '',
  numberOfSeats: '',
  usedYears: '',
  lastMaintainedDate: '',
}

const CoachCreateForm = (props) => {
  const [coach, setCoach] = useState(defaultCoach);
  // const coachState = useSelector(state => state.coachReducer);
  const dispatch = useDispatch();
  const history = useHistory()

  const onEditCoach = (key, value) => {
    setCoach({
      ...coach,
      [key]: value
    });
  }

  const submitCoach = () => {
    dispatch(coachActions.addNewCoach(coach)).then(result => {
      history.push('/coaches');
    }).catch(error => alert('There was an error'));
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
        <div className="bx--col-lg-16">
          <Form>
            <div style={{ marginBottom: '2rem' }}>
              <TextInput
                invalidText="Invalid error message."
                labelText="Coach Model"
                placeholder="Insert coach model"
                value={coach.coachModel}
                onChange={(e) => onEditCoach('coachModel', e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <TextInput
                invalidText="Invalid error message."
                labelText="Coach Version"
                placeholder="Insert coach version"
                value={coach.coachVersion}
                onChange={(e) => onEditCoach('coachVersion', e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <TextInput
                invalidText="Invalid error message."
                labelText="License Plate"
                placeholder="Insert license plate"
                value={coach.licensePlate}
                onChange={(e) => onEditCoach('licensePlate', e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <TextInput
                invalidText="Invalid error message."
                labelText="Color"
                placeholder="Insert color"
                value={coach.color}
                onChange={(e) => onEditCoach('color', e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <TextInput
                invalidText="Invalid error message."
                labelText="Manufacturer Name"
                placeholder="Insert manufacturer name"
                value={coach.manufacturerName}
                onChange={(e) => onEditCoach('manufacturerName', e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <TextInput
                invalidText="Invalid error message."
                labelText="Number Of Seats"
                placeholder="Insert number of seats"
                value={coach.numberOfSeats}
                onChange={(e) => onEditCoach('numberOfSeats', e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <TextInput
                invalidText="Invalid error message."
                labelText="Used Years"
                placeholder="Insert used years"
                value={coach.usedYears}
                onChange={(e) => onEditCoach('usedYears', e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <DatePicker dateFormat="Y-m-d" datePickerType="single">
                <DatePickerInput
                  id="date-picker-default-id"
                  placeholder="yyyy-mm-dd"
                  labelText="Last Maintained Date"
                  type="text"
                  value={coach.lastMaintainedDate}
                  onChange={(e) => onEditCoach('lastMaintainedDate', e.target.value)}
                />
              </DatePicker>
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

export default CoachCreateForm;