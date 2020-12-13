import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderMenuButton
} from 'carbon-components-react/lib/components/UIShell';

import authenticationServices from '../services/authentication.services';


const MainLayout = (props) => {
  const authenticationState = useSelector(state => state.authenticationReducer);
  const isAuthenticated = !_.isEmpty(authenticationState.currentAccount);
  return (
    <div>
      <Header>
        <HeaderName element={Link} to="/" prefix=''>
          Passenger Transportation
        </HeaderName>
        <HeaderNavigation>
          {isAuthenticated ? (
            <>
              <HeaderMenuItem element={Link} to="/coaches">Coach</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/employees">Employee</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/routes">Route</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="/trips">Trip</HeaderMenuItem>
              <HeaderMenu aria-label="Statistic" menuLinkName="Statistic">
                <HeaderMenuItem element={Link} to="/statistic/coach">Coach</HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/statistic/employee-salary">Employee Salary</HeaderMenuItem>
              </HeaderMenu>
            </>
          ) : (
            <>
              <HeaderMenuItem element={Link} to="/login">Log In</HeaderMenuItem>
              {/* <HeaderMenuItem element={Link} to="/register">Register</HeaderMenuItem> */}
            </>
          )}
        </HeaderNavigation>
        <HeaderGlobalBar>
          {isAuthenticated && (
            <>
              <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                <Search20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                <Notification20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
                <AppSwitcher20 />
              </HeaderGlobalAction>
            </>
          )}
        </HeaderGlobalBar>
      </Header>
      <div className='pt-main-body'>
        {props.children}
      </div>
      <div>Footer</div>
    </div>
  );
}

export default MainLayout;