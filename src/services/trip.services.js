import { base } from './base.services';

const loadAllTrips = () => {
  return base.requests.get('/trip');
};

const getTripById = (id) => {
  return base.requests.get(`/trip/${id}`);
};

const addNewTrip = (trip) => {
  return base.requests.post('/trip', trip);
};

const updateTrip = (trip) => {
  return base.requests.put(`/trip/${trip.id}`, trip);
};

const deleteTrip = (id) => {
  return base.requests.del(`/trip/${id}`);
};

export default {
  loadAllTrips,
  getTripById,
  addNewTrip,
  updateTrip,
  deleteTrip,
};
