import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  DataTable,
  DatePicker,
  DatePickerInput,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TextInput,
  TimePicker,
} from 'carbon-components-react';
import View20 from '@carbon/icons-react/lib/view/20';

import employeeActions from '../../actions/employee.actions';
import { EMPLOYEE_SALARY_STATISTIC_TABLE } from '../../helpers/constants';

const EmployeeSalaryStatistic = (props) => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const employeeState = useSelector((state) => state.employeeReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const { statistic, loading } = employeeState;

  const viewStatistic = () => {
    dispatch(employeeActions.getEmployeeSalaryStatistic(year, month));
  };

  const showEmployeeDetail = (id) => {
    console.log(`show detail${id}`);
    history.push(`/employee/${id}`);
  };

  const renderStatistic = () => {
    const formattedStatistic = _.map(statistic, (item, index) => {
      return {
        id: _.get(item, 'employee.id'),
        no: index + 1,
        employeeName: _.get(item, 'employee.employeeName'),
        numberOfTripAsMain: _.get(item, 'numberOfTripAsMain'),
        numberOfTripAsSup: _.get(item, 'numberOfTripAsSup'),
        salary: _.get(item, 'salary'),
        totalLateHours: _.get(item, 'totalLateHours'),
        action: (
          <Button
            hasIconOnly
            renderIcon={View20}
            tooltipAlignment="center"
            tooltipPosition="bottom"
            iconDescription="View employee detail"
            size="small"
            onClick={() => showEmployeeDetail(_.get(item, 'employee.id'))}
          />
        ),
      };
    });

    return (
      <div className="bx--col-lg-16">
        <DataTable
          rows={formattedStatistic}
          headers={EMPLOYEE_SALARY_STATISTIC_TABLE}
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
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        />
      </div>
    );
  };

  return (
    <>
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">Employee Salary Statistic</h1>
        </div>
      </div>

      <div className="bx--row" style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '2rem' }} className="bx--col-lg-4">
          <TextInput
            invalidText="Invalid error message."
            labelText=""
            placeholder="Insert month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '2rem' }} className="bx--col-lg-4">
          <TextInput
            invalidText="Invalid error message."
            labelText=""
            placeholder="Insert year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '2rem' }} className="bx--col-lg-4">
          <Button kind="primary" tabIndex={0} type="button" onClick={viewStatistic}>
            View Statistic
          </Button>
        </div>
      </div>

      <div className="bx--row landing-page__banner">{loading ? <div>Loading...</div> : renderStatistic()}</div>
    </>
  );
};

export default EmployeeSalaryStatistic;
