import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
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

import routeActions from '../../actions/route.actions';
import { ROUTE_DATA_TABLE_CONFIG } from '../../helpers/constants';
import commonActions from '../../actions/common.actions';

const RouteList = (props) => {
  const routeState = useSelector(state => state.routeReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(routeActions.loadAllRoutes());
  }, [dispatch]);

  const { routes, loading } = routeState;

  const showRouteDetail = (id) => {
    console.log('show detail' + id);
    history.push(`/route/${id}`);
  }

  const editRoute = (id) => {
    console.log('edit' + id);
    history.push(`/route/${id}/edit`);
  }

  const deleteRoute = (id) => {
    console.log('delete' + id);
    dispatch(routeActions.deleteRoute(id))
      .catch(error => {
        console.log(1111111, error)
        alert("Error");
      })
  }

  const renderList = () => {
    return (
      <DataTable
        rows={routes}
        headers={ROUTE_DATA_TABLE_CONFIG}
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
                            <Button
                              hasIconOnly
                              renderIcon={View20}
                              tooltipAlignment="center"
                              tooltipPosition="bottom"
                              iconDescription="View route detail"
                              size="small"
                              onClick={() => showRouteDetail(row.id)}
                            />
                            <Button
                              hasIconOnly
                              renderIcon={Edit20}
                              tooltipAlignment="center"
                              tooltipPosition="bottom"
                              iconDescription="Edit route"
                              size="small"
                              kind="secondary"
                              onClick={() => editRoute(row.id)}
                            />
                            <ModalWrapper
                              buttonTriggerClassName="bx--btn--sm bx--btn--icon-only"
                              renderTriggerButtonIcon={Delete20}
                              triggerButtonKind="danger"
                              triggerButtonIconDescription="Delete route"
                              size="xs"
                              primaryButtonText="Delete"
                              modalHeading="Delete this route?"
                              modalLabel="Confirming"
                              danger
                              handleSubmit={() => deleteRoute(row.id)}
                            >
                              <p>Are you sure to delete this route?</p>
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
            Route List
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Link to='/route/add'>Add new</Link>
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

export default RouteList;