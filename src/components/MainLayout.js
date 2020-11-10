import React from 'react';
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
  HeaderMenuItem
} from 'carbon-components-react/lib/components/UIShell';
import { Button } from 'carbon-components-react';

const MainLayout = (props) => {
  return (
    <div>
      <Header>
        <HeaderName href="./" prefix=''>
          Passenger Transportation
        </HeaderName>
        <HeaderNavigation>
          <HeaderMenuItem href="./coaches">Coach</HeaderMenuItem>
          <HeaderMenuItem href="./employees">Employee</HeaderMenuItem>
          <HeaderMenuItem href="./routes">Route</HeaderMenuItem>
          <HeaderMenu aria-label="Report" menuLinkName="Report">
            <HeaderMenuItem href="#">By Coaches</HeaderMenuItem>
            <HeaderMenuItem href="#">By ...</HeaderMenuItem>
            <HeaderMenuItem href="#">By ...</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
            <Search20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
            <AppSwitcher20 />
          </HeaderGlobalAction>
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