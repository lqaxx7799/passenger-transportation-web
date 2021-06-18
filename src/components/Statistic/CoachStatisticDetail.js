import React from 'react';
import _ from 'lodash';
import {
  Button,
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from 'carbon-components-react';
import { TRIP_DATA_TABLE_CONFIG } from '../../helpers/constants';

const CoachStatisticDetail = (props) => {
  const formattedTrips = _.map(_.get(props, 'data.listTrip'), (trip) => ({
    ...trip,
    coachModel: _.get(trip, 'coach.coachModel'),
    route: `${_.get(trip, 'route.startingPoint')} - ${_.get(trip, 'route.destinationPoint')}`,
    driverName: _.get(trip, 'employee1.employeeName'),
    assistantName: _.get(trip, 'employee2.employeeName'),
  }));
  return (
    <DataTable
      rows={formattedTrips}
      headers={TRIP_DATA_TABLE_CONFIG}
      useZebraStyles={true}
      render={({ rows, headers, getHeaderProps, getTableProps }) => (
        <TableContainer title="DataTable">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader key={header.key}>{header.name}</TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  {row.cells.map((cell) =>
                    cell.info.header !== 'action' ? (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ) : (
                      <TableCell key={cell.id}>
                        <div></div>
                      </TableCell>
                    ),
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default CoachStatisticDetail;
