import React, { useEffect } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  Breadcrumb, 
  BreadcrumbItem,
  Button,
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow
} from 'carbon-components-react';

import {
  COACH_NEXT_MAINTAINANCE_TABLE,
  COACH_OVER_MAINTAINANCE_TABLE
} from '../../helpers/constants';
import coachActions from '../../actions/coach.actions';

const CoachMaintainance = (props) => {
  const coachState = useSelector(state => state.coachReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(coachActions.getCoachMaintainanceData());
  }, [dispatch]);

  const { coachMaintainanceData, loading, editingCoach } = coachState;

  const maintainCoach = (id) => {
    dispatch(coachActions.initEditingCoach(id))
      .then(() => {
        dispatch(coachActions.editCoach('lastMaintainedDate', new Date()))
          .then(() => {
            dispatch(coachActions.submitCoach(editingCoach))
              .then(() => {
                window.location.reload();
              })
          })
      })
  }

  const renderNextList = () => {
    const formattedRows = _.map(_.get(coachMaintainanceData, '0'), item => ({
      id: _.get(item, 'coach.id'),
      coachModel: _.get(item, 'coach.coachModel'),
      next: _.get(item, 'next'),
      action: (
        <div>aaaa</div>
      ),
    }));

    return (
      <DataTable
        rows={formattedRows}
        headers={COACH_NEXT_MAINTAINANCE_TABLE}
        useZebraStyles={true}
        render={({ rows, headers, getHeaderProps, getTableProps }) => (
          <TableContainer title="Next maintainance">
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
              <TableBody style={{ minHeight: '300px' }}>
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
    );
  }

  const renderOverList = () => {
    const formattedRows = _.map(_.get(coachMaintainanceData, '1'), item => ({
      id: _.get(item, 'coach.id'),
      coachModel: _.get(item, 'coach.coachModel'),
      overDays: _.get(item, 'overDays'),
      action: (
        <Button
          onClick={() => maintainCoach(_.get(item, 'coach.id'))}
        >
          Maintain
        </Button>
      ),
    }));

    return (
      <DataTable
        rows={formattedRows}
        headers={COACH_OVER_MAINTAINANCE_TABLE}
        useZebraStyles={true}
        render={({ rows, headers, getHeaderProps, getTableProps }) => (
          <TableContainer title="Over maintainance day">
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
              <TableBody style={{ minHeight: '300px' }}>
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
    );
  }

  return (
    <>
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <Link to="/coaches">Back to list</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Coach maintainance status
          </h1>
        </div>
        <div className="bx--row landing-page__banner">
          <div className="bx--col-lg-8">
            {
              loading
                ? <div>Loading...</div>
                : renderNextList()
            }
          </div>
          <div className="bx--col-lg-8">
            {
              loading
                ? <div>Loading...</div>
                : renderOverList()
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default CoachMaintainance;