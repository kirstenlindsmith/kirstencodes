import React from 'react';
import aact from '../../../../assets/AACT.png';
import useSnackbar from '../../../../hooks/useSnackbar';
import HamburgerMenu from './HamburgerMenu';
import {
  UserHomePage,
  MainContainer,
  Header,
  PageBody,
  BodyCard,
  Footer,
} from './UserHome.style';

const UserHome = () => {
  return (
    <UserHomePage>
      <HamburgerMenu />
      <MainContainer>
        <Header>
          <h1>Condition Data</h1>
          <img src={aact} aria-label='AACT' />
        </Header>
        <PageBody>
          <BodyCard style={{ marginRight: '1.5rem' }}>
            Small table of study data
          </BodyCard>
          <BodyCard>Pie chart of conditions</BodyCard>
        </PageBody>
      </MainContainer>
      <Footer>Footer</Footer>
    </UserHomePage>
  );
};

export default UserHome;
