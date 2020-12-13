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

import coachActions from '../../actions/coach.actions';
import { COACH_DATA_TABLE_CONFIG } from '../../helpers/constants';
import commonActions from '../../actions/common.actions';

const CoachList = (props) => {
  const coachState = useSelector(state => state.coachReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(coachActions.loadAllCoaches());
  }, [dispatch]);

  const { coaches, loading } = coachState;

  const showCoachDetail = (id) => {
    console.log('show detail' + id);
    history.push(`/coach/${id}`);
  }

  const editCoach = (id) => {
    console.log('edit' + id);
    history.push(`/coach/${id}/edit`);
  }

  const deleteCoach = (id) => {
    console.log('delete' + id);
    dispatch(coachActions.deleteCoach(id))
      .catch(error => {
        console.log(1111111, error)
        alert("Error");
      })
  }

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
                              iconDescription="View coach detail"
                              size="small"
                              onClick={() => showCoachDetail(row.id)}
                            /> */}
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
                            <ModalWrapper
                              buttonTriggerClassName="bx--btn--sm bx--btn--icon-only"
                              renderTriggerButtonIcon={Delete20}
                              triggerButtonKind="danger"
                              triggerButtonIconDescription="Delete coach"
                              size="xs"
                              primaryButtonText="Delete"
                              modalHeading="Delete this coach?"
                              modalLabel="Confirming"
                              danger
                              handleSubmit={() => deleteCoach(row.id)}
                            >
                              <p>Are you sure to delete this coach?</p>
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
            Coach List
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <div style={{ marginBottom: '20px' }}>
            <Link to='/coach/add'>Add new</Link>&nbsp;
            <Link to='/coach/maintainance'>View maintainance status</Link>
          </div>
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

export default CoachList;