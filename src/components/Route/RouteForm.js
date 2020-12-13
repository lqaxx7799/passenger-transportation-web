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

import routeActions from '../../actions/route.actions';
import commonActions from '../../actions/common.actions';

const RouteForm = (props) => {
  const routeState = useSelector(state => state.routeReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const routeId = props.match.params.id;
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(routeActions.initEditingRoute(routeId));
  }, []);

  const { editingRoute, loading } = routeState;

  const onEditRoute = (key, value) => {
    dispatch(routeActions.editRoute(key, value));
  }

  const submitRoute = () => {
    dispatch(routeActions.submitRoute(editingRoute)).then(result => {
      history.push('/routes');
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
              <Link to="/routes">Back to list</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Add new route
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
            <h3>Route Information</h3>
            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Starting Point"
                  placeholder="Insert starting point"
                  value={editingRoute.startingPoint}
                  onChange={(e) => onEditRoute('startingPoint', e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Destination Point"
                  placeholder="Insert destination point"
                  value={editingRoute.destinationPoint}
                  onChange={(e) => onEditRoute('destinationPoint', e.target.value)}
                />
              </div>
            </div>

            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Distance"
                  placeholder="Insert distance"
                  value={editingRoute.distance}
                  onChange={(e) => onEditRoute('distance', e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Route Complexity"
                  placeholder="Insert route complexity"
                  value={editingRoute.routeComplexity}
                  onChange={(e) => onEditRoute('routeComplexity', e.target.value)}
                />
              </div>
            </div>
            <div className="bx--row">
              <div style={{ marginBottom: '2rem' }} className="bx--col-lg-8">
                <TextInput
                  invalidText="Invalid error message."
                  labelText="Estimated Hours"
                  placeholder="Insert estimated hours"
                  value={editingRoute.estimatedHours}
                  onChange={(e) => onEditRoute('estimatedHours', e.target.value)}
                />
              </div>
            </div>

            <Button
              kind="primary"
              tabIndex={0}
              type="button"
              onClick={submitRoute}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default RouteForm;