import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import coachActions from '../../actions/coach.actions';

const CoachList = (props) => {
  const coachState = useSelector(state => state.coachReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coachActions.loadAllCoaches());
  }, [dispatch]);

  const { coaches, loading } = coachState;

  const renderList = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Manufacturer Name</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {coaches.map((coach, index) => (
            <tr key={index}>
              <td>{coach.id}</td>
              <td>{coach.manufacturerName}</td>
              <td>{coach.coachModel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <div>Coach List</div>
      {
        loading
          ? <div>Loading...</div>
          : renderList()
      }
    </div>
  );
}

export default CoachList;