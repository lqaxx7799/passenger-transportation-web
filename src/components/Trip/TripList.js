import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import _ from 'lodash';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  DataTable,
  ModalWrapper,
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

import tripActions from '../../actions/trip.actions';
import { TRIP_DATA_TABLE_CONFIG } from '../../helpers/constants';
import commonActions from '../../actions/common.actions';

const TripList = (props) => {
  const tripState = useSelector(state => state.tripReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(tripActions.loadAllTrips());
  }, [dispatch]);

  const { trips, loading } = tripState;

  // const formattedTrips = _.map(trips, trip => {
  //   return {
  //     ...trip,
  //     coachName: <span></span>,
  //     routeId: '',
  //   }
  // })

  const showTripDetail = (id) => {
    console.log('show detail' + id);
    history.push(`/trip/${id}`);
  }

  const editTrip = (id) => {
    console.log('edit' + id);
    history.push(`/trip/${id}/edit`);
  }

  const deleteTrip = (id) => {
    console.log('delete' + id);
    dispatch(tripActions.deleteTrip(id))
      .catch(error => {
        console.log(1111111, error)
        alert("Error");
      })
  }

  const renderList = () => {
    return (
      <DataTable
        rows={trips}
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
                      cell.info.header !== 'action'
                        ? <TableCell key={cell.id}>{cell.value}</TableCell>
                        : (
                          <TableCell key={cell.id}>
                            {/* <Button
                              hasIconOnly
                              renderIcon={View20}
                              tooltipAlignment="center"
                              tooltipPosition="bottom"
                              iconDescription="View trip detail"
                              size="small"
                              onClick={() => showTripDetail(row.id)}
                            /> */}
                            <Button
                              hasIconOnly
                              renderIcon={Edit20}
                              tooltipAlignment="center"
                              tooltipPosition="bottom"
                              iconDescription="Edit trip"
                              size="small"
                              kind="secondary"
                              onClick={() => editTrip(row.id)}
                            />
                            <ModalWrapper
                              buttonTriggerClassName="bx--btn--sm bx--btn--icon-only"
                              renderTriggerButtonIcon={Delete20}
                              triggerButtonKind="danger"
                              triggerButtonIconDescription="Delete trip"
                              size="xs"
                              primaryButtonText="Delete"
                              modalHeading="Delete this trip?"
                              modalLabel="Confirming"
                              danger
                              handleSubmit={() => deleteTrip(row.id)}
                            >
                              <p>Are you sure to delete this trip?</p>
                            </ModalWrapper>
                          </TableCell>
                        )
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
              <Link to="/">Home</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Trip List
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Link to='/trip/add'>Add new</Link>
          {
            loading
              ? <div>Loading...</div>
              : renderList()
          }
        </div>
      </div>
    </>
  );
}

export default TripList;