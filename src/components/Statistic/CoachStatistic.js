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
  ModalWrapper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TimePicker,
} from 'carbon-components-react';
import View20 from '@carbon/icons-react/lib/view/20';

import coachActions from '../../actions/coach.actions';
import { COACH_STATISTIC_TABLE } from '../../helpers/constants';
import CoachStatisticDetail from './CoachStatisticDetail';

const CoachStatistic = (props) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const coachState = useSelector((state) => state.coachReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const { statistic, loading } = coachState;

  // useEffect(() => {
  //   dispatch(coachActions.getCoachStatistic('2020-10-10 00:00:00', '2020-12-30 00:00:00'));
  // }, [dispatch]);

  const viewStatistic = () => {
    dispatch(coachActions.getCoachStatistic(`${from} 00:00:00`, `${to} 00:00:00`));
  };

  const showCoachDetail = (id) => {
    console.log(`show detail${id}`);
    // history.push(`/coach/${id}`);
  };

  const renderDetailModal = (id) => {
    return (
      <ModalWrapper
        hasScrollingContent
        passiveModal
        size="lg"
        modalHeading="Coach Revenue Detail"
        triggerButtonIconDescription="View coach revenue detail"
        modalLabel=""
        buttonTriggerClassName="bx--btn--sm bx--btn--icon-only"
        renderTriggerButtonIcon={View20}
        triggerButtonKind="primary"
      >
        <CoachStatisticDetail data={_.find(statistic, (item) => _.get(item, 'coach.id') === id)} />
      </ModalWrapper>
    );
  };

  const renderStatistic = () => {
    console.log(statistic);
    const formattedStatistic = _.map(statistic, (item, index) => {
      return {
        no: index + 1,
        licensePlate: _.get(item, 'coach.licensePlate'),
        coachModel: _.get(item, 'coach.coachModel'),
        revenue: _.get(item, 'revenue'),
        action: renderDetailModal(_.get(item, 'coach.id')),
      };
    });

    return (
      <div className="bx--col-lg-16">
        <DataTable
          rows={formattedStatistic}
          headers={COACH_STATISTIC_TABLE}
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
                <TableBody style={{ minHeight: '300px' }}>
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
          <h1 className="landing-page__heading">Coach Revenue Statistic</h1>
        </div>
      </div>

      <div className="bx--row" style={{ marginBottom: '20px' }}>
        <DatePicker dateFormat="Y-m-d" datePickerType="single" onSelect={(e) => setFrom(e.target.value)}>
          <DatePickerInput id="date-picker-default-id" placeholder="yyyy-mm-dd" labelText="From" type="text" value={from} />
        </DatePicker>
        <DatePicker dateFormat="Y-m-d" datePickerType="single" onSelect={(e) => setTo(e.target.value)}>
          <DatePickerInput id="date-picker-default-id" placeholder="yyyy-mm-dd" labelText="To" type="text" value={to} />
        </DatePicker>
        <Button kind="primary" tabIndex={0} type="button" onClick={viewStatistic}>
          View Statistic
        </Button>
      </div>

      <div className="bx--row landing-page__banner">{loading ? <div>Loading...</div> : renderStatistic()}</div>
    </>
  );
};

export default CoachStatistic;
