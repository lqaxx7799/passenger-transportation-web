import React from 'react';

const MainLayout = (props) => {
  return (
    <div>
      <div>Header</div>
      {props.children}
      <div>Footer</div>
    </div>
  );
}

export default MainLayout;