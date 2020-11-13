export const constants = {
  COACH_LOADING: 'COACH_LOADING',
  COACH_LOADED: 'COACH_LOADED',
  COACH_EDITING_LOADED: 'COACH_EDITING_LOADED',
  COACH_EDITING_CHANGED: 'COACH_EDITING_CHANGED',

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