import { base } from './base.services';

const loadAllCoaches = () => {
  return base.requests.get('/coach');
};
const getCoachById = (id) => {
  return base.requests.get(`/coach/${id}`);
};

const getCoachStatistic = (from, to) => {
  return base.requests.get(`/statisticCoachRevenue/${from}/${to}`);
};

const getCoachMaintainanceData = () => {
  return base.requests.get('/nextMaintenance');
};

const addNewCoach = (coach) => {
  return base.requests.post('/coach', coach);
};

const updateCoach = (coach) => {
  return base.requests.put(`/coach/${coach.id}`, coach);
};

const deleteCoach = (id) => {
  return base.requests.del(`/coach/${id}`);
};

export default {
  loadAllCoaches,
  getCoachById,
  getCoachStatistic,
  getCoachMaintainanceData,
  addNewCoach,
  updateCoach,
  deleteCoach,
};
