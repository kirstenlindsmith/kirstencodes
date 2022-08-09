import React from 'react';
import useSnackbar from '../../../../hooks/useSnackbar';
import HamburgerMenu from './HamburgerMenu';
import { UserHomePage } from './UserHome.style';

const UserHome = () => {
  return (
    <UserHomePage>
      <header>Header</header>
      <HamburgerMenu />
      <div>Small table of study data</div>
      <div>Pie chart of conditions</div>
      <footer>Footer</footer>
    </UserHomePage>
  );
};

export default UserHome;
