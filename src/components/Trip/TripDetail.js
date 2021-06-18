import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  TableRow,
} from 'carbon-components-react';
import View20 from '@carbon/icons-react/lib/view/20';
import Edit20 from '@carbon/icons-react/lib/edit/20';
import Delete20 from '@carbon/icons-react/lib/delete/20';

import coachActions from '../../actions/coach.actions';
import { COACH_DATA_TABLE_CONFIG } from '../../helpers/constants';

const TripDetail = (props) => {
  const coachState = useSelector((state) => state.coachReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coachActions.loadAllCoaches());
  }, [dispatch]);

  const { coaches, loading } = coachState;

  const showCoachDetail = (id) => {
    console.log(`show detail${id}`);
  };

  const editCoach = (id) => {
    console.log(`edit${id}`);
  };

  const deleteCoach = (id) => {
    console.log(`delete${id}`);
  };

  const renderList = () => {
    return (
      <DataTable
        rows={coaches}
        headers={COACH_DATA_TABLE_CONFIG}
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
                          <Button
                            hasIconOnly
                            renderIcon={View20}
                            tooltipAlignment="center"
                            tooltipPosition="bottom"
                            iconDescription="View coach detail"
                            size="small"
                            onClick={() => showCoachDetail(row.id)}
                          />
                          <Button
                            hasIconOnly
                            renderIcon={Edit20}
                            tooltipAlignment="center"
                            tooltipPosition="bottom"
                            iconDescription="Edit coach"
                            size="small"
                            kind="secondary"
                            onClick={() => editCoach(row.id)}
                          />
                          <Button
                            hasIconOnly
                            renderIcon={Delete20}
                            tooltipAlignment="center"
                            tooltipPosition="bottom"
                            iconDescription="Delete coach"
                            kind="danger"
                            size="small"
                            onClick={() => deleteCoach(row.id)}
                          />
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

  return (
    <>
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">Coach List</h1>
        </div>
      </div>
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Link to="/coach/add">Add new</Link>
          {loading ? <div>Loading...</div> : renderList()}
        </div>
      </div>
    </>
  );
};

export default TripDetail;
