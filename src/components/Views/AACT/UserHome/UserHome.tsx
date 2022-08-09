import React from 'react';
import aact from '../../../../assets/AACT.png';
import HamburgerMenu from './components/HamburgerMenu';
import ConditionsTable from './components/ConditionsTable';
import {
  UserHomePage,
  MainContainer,
  Header,
  PageBody,
  BodyCard,
  tableCardStyles,
  Footer,
} from './UserHome.style';

const UserHome = () => {
  return (
    <UserHomePage>
      <HamburgerMenu />
      <MainContainer>
        <Header>
          <img src={aact} aria-label='AACT' />
          <h1>Study Data</h1>
        </Header>
        <PageBody>
          <BodyCard style={tableCardStyles}>
            <ConditionsTable />
          </BodyCard>
          <BodyCard>Pie chart of conditions</BodyCard>
        </PageBody>
      </MainContainer>
      <Footer>Footer</Footer>
    </UserHomePage>
  );
};

export default UserHome;
