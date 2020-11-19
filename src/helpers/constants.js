export const constants = {
  COACH_LOADING: 'COACH_LOADING',
  COACH_LOADED: 'COACH_LOADED',
  COACH_EDITING_LOADED: 'COACH_EDITING_LOADED',
  COACH_EDITING_CHANGED: 'COACH_EDITING_CHANGED',

  EMPLOYEE_LOADING: 'EMPLOYEE_LOADING',
  EMPLOYEE_LOADED: 'EMPLOYEE_LOADED',
  EMPLOYEE_EDITING_LOADED: 'EMPLOYEE_EDITING_LOADED',
  EMPLOYEE_EDITING_CHANGED: 'EMPLOYEE_EDITING_CHANGED',

  ROUTE_LOADING: 'ROUTE_LOADING',
  ROUTE_LOADED: 'ROUTE_LOADED',
  ROUTE_EDITING_LOADED: 'ROUTE_EDITING_LOADED',
  ROUTE_EDITING_CHANGED: 'ROUTE_EDITING_CHANGED',

  TRIP_LOADING: 'TRIP_LOADING',
  TRIP_LOADED: 'TRIP_LOADED',
  TRIP_EDITING_LOADED: 'TRIP_EDITING_LOADED',
  TRIP_EDITING_CHANGED: 'TRIP_EDITING_CHANGED',

  AUTHENTICATION_LOGGED_IN: 'AUTHENTICATION_LOGGED_IN',

  ASYNC_START: 'ASYNC_START',
  ASYNC_END: 'ASYNC_END',
};

export const DEFAULT_COACH = {
  coachModel: '',
  coachVersion: '',
  licensePlate: '',
  color: '',
  manufacturerName: '',
  numberOfSeats: '',
  usedYears: '',
  lastMaintainedDate: '',
};

export const DEFAULT_EMPLOYEE = {
  address: '',
  dateOfBirth: '',
  employeeName: '',
  gender: '',
  identificationNumber: '',
  licenseCode: '',
  licenseType: '',
  senority: '',
};

export const DEFAULT_ROUTE = {
  startingPoint: '',
  destinationPoint: '',
  distance: '',
  estimatedHours: '',
  routeComplexity: '',
};

export const DEFAULT_TRIP = {
  arrivalTime: '',
  departureTime: '',
  numberOfPassengers: '',
  ticketPrice: '',
  status: '',
  coachId: '',
  employee1Id: '', // driver
  employee2Id: '', // assistant
  routeId: '',
}

export const COACH_DATA_TABLE_CONFIG = [
  {
    key: 'id',
    name: 'Id'
  },
  {
    key: 'coachModel',
    name: 'Coach Model'
  },
  {
    key: 'coachVersion',
    name: 'Coach Version'
  },
  {
    key: 'licensePlate',
    name: 'License Plate'
  },
  {
    key: 'color',
    name: 'Color'
  },
  {
    key: 'manufacturerName',
    name: 'Manufacturer Name'
  },
  {
    key: 'numberOfSeats',
    name: 'Number Of Seats'
  },
  {
    key: 'usedYears',
    name: 'Used Years'
  },
  {
    key: 'lastMaintainedDate',
    name: 'Last Maintained Date'
  },
  {
    key: 'action',
    name: 'Action'
  }
];