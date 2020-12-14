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
  AUTHENTICATION_LOGGED_OUT: 'AUTHENTICATION_LOGGED_OUT',

  COACH_STATISTIC_LOADING: 'COACH_STATISTIC_LOADING',
  COACH_STATISTIC_LOADED: 'COACH_STATISTIC_LOADED',

  COACH_MAINTAINANCE_DATA_LOADING: 'COACH_MAINTAINANCE_DATA_LOADING',
  COACH_MAINTAINANCE_DATA_LOADED: 'COACH_MAINTAINANCE_DATA_LOADED',

  EMPLOYEE_SALARY_STATISTIC_LOADING: 'EMPLOYEE_SALARY_STATISTIC_LOADING',
  EMPLOYEE_SALARY_STATISTIC_LOADED: 'EMPLOYEE_SALARY_STATISTIC_LOADED',

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
  seniority: '',
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
  coach: {},
  employee1: {}, // driver
  employee2: {}, // assistant
  route: {},
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

export const ROUTE_DATA_TABLE_CONFIG = [
  {
    key: 'id',
    name: 'Id'
  },
  {
    key: 'startingPoint',
    name: 'Starting point'
  },
  {
    key: 'destinationPoint',
    name: 'Destination Point'
  },
  {
    key: 'distance',
    name: 'Distance'
  },
  {
    key: 'routeComplexity',
    name: 'Route Complexity'
  },
  {
    key: 'estimatedHours',
    name: 'Estimated Hours'
  },
  {
    key: 'action',
    name: 'Action'
  },
];

export const EMPLOYEE_DATA_TABLE_CONFIG = [
  {
    key: 'id',
    name: 'Id'
  },
  {
    key: 'employeeName',
    name: 'Employee Name'
  },
  {
    key: 'address',
    name: 'Address'
  },
  {
    key: 'dateOfBirth',
    name: 'Date of Birth'
  },
  {
    key: 'gender',
    name: 'Gender'
  },
  {
    key: 'identificationNumber',
    name: 'Identification Number'
  },
  {
    key: 'licenseCode',
    name: 'License Code'
  },
  {
    key: 'licenseType',
    name: 'License Type'
  },
  {
    key: 'seniority',
    name: 'Seniority'
  },
  {
    key: 'action',
    name: 'Action'
  },
];
  
export const TRIP_DATA_TABLE_CONFIG = [
  {
    key: 'id',
    name: 'Id'
  },
  {
    key: 'arrivalTime',
    name: 'Arrival Time'
  },
  {
    key: 'departureTime',
    name: 'Departure Time'
  },
  {
    key: 'ticketPrice',
    name: 'Ticket Price'
  },
  {
    key: 'numberOfPassengers',
    name: 'Number of Passengers'
  },
  {
    key: 'status',
    name: 'Status'
  },
  {
    key: 'coachModel',
    name: 'Coach Model'
  },
  {
    key: 'route',
    name: 'Route'
  },
  {
    key: 'driverName',
    name: 'Driver Name'
  },
  {
    key: 'assistantName',
    name: 'Assistant Name'
  },
  {
    key: 'action',
    name: 'Action'
  },
];

export const COACH_STATISTIC_TABLE = [
  {
    key: 'no',
    name: 'No',
  },
  {
    key: 'licensePlate',
    name: 'License Plate',
  },
  {
    key: 'coachModel',
    name: 'Coach Model',
  },
  {
    key: 'revenue',
    name: 'Revenue',
  },
  {
    key: 'action',
    name: 'Action',
  }
];

export const EMPLOYEE_SALARY_STATISTIC_TABLE = [
  {
    key: 'no',
    name: 'No',
  },
  {
    key: 'employeeName',
    name: 'Employee Name',
  },
  {
    key: 'numberOfTripAsMain',
    name: 'Number of trips as driver',
  },
  {
    key: 'numberOfTripAsSup',
    name: 'Number of trips as assistant',
  },
  {
    key: 'salary',
    name: 'Salary',
  },
  {
    key: 'totalLateHours',
    name: 'Total late hours',
  },
  {
    key: 'action',
    name: 'Action',
  }
];

export const COACH_NEXT_MAINTAINANCE_TABLE = [
  {
    key: 'id',
    name: 'Coach Id',
  },
  {
    key: 'coachModel',
    name: 'Coach Model',
  },
  {
    key: 'next',
    name: 'Next maintainance date',
  },
  {
    key: 'action',
    name: 'Action',
  }
];

export const COACH_OVER_MAINTAINANCE_TABLE = [
  {
    key: 'id',
    name: 'Coach Id',
  },
  {
    key: 'coachModel',
    name: 'Coach Model',
  },
  {
    key: 'overDays',
    name: 'Over days',
  },
  {
    key: 'action',
    name: 'Action',
  }
];
