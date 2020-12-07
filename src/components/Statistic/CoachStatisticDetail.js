import React from 'react';
import _ from 'lodash';
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow
} from 'carbon-components-react';
import { TRIP_DATA_TABLE_CONFIG } from '../../helpers/constants';

const CoachStatisticDetail = (props) => {
  return (
    <div className='bx--row'>
      <div className="bx--col-lg-16">
        <DataTable
          rows={_.get(props, 'data.listTrip')}
          headers={TRIP_DATA_TABLE_CONFIG}
          useZebraStyles={true}
          render={({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer title="DataTable">
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map(header => (
                      <TableHeader key={header.key}>
                        {header.name}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>)}
        />
      </div>
    </div>
  );
}

export default CoachStatisticDetail;