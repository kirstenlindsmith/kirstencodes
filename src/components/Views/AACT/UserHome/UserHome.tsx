import React from 'react';
import useSnackbar from '../../../../hooks/useSnackbar';
import aact from '../../../../assets/AACT.png';
import { UserHomePage, HamburgerMenu } from './UserHome.style';

const UserHome = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <UserHomePage>
      <header>Header</header>
      <HamburgerMenu
        role='navigation'
        open={navOpen}
        onClick={() => setNavOpen(!navOpen)}
      >
        Hamburger menu
      </HamburgerMenu>
      <div>Small table of study data</div>
      <div>Pie chart of conditions</div>
      <footer>Footer</footer>
    </UserHomePage>
  );
};

export default UserHome;
