import { base } from './base.services';

const loadAllRoutes = () => {
  return base.requests.get('/route');
}

const getRouteById = (id) => {
  return base.requests.get(`/route/${id}`);
}

const addNewRoute = (route) => {
  return base.requests.post('/route', route);
}

const updateRoute = (route) => {
  return base.requests.put(`/route/${route.id}`, route);
}

const deleteRoute = (id) => {
  return base.requests.del(`/route/${id}`);
}

export default {
  loadAllRoutes,
  getRouteById,
  addNewRoute,
  updateRoute,
  deleteRoute,
}