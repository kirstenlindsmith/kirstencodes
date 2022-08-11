import React from 'react';
import aact from '../../../../../../assets/AACT.png';
import useAACTUser from '../../../../../../hooks/useAACTUser';
import Link from '../../../../../Shared/Link';
import {
  StyledHeader,
  TitleSection,
  UserSection,
  UserGreeting,
  UserDivider,
} from './Header.style';

const Header = () => {
  const user = useAACTUser();
  return (
    <StyledHeader>
      <TitleSection>
        <img src={aact} aria-label='AACT' />
        <h1>Study Data</h1>
      </TitleSection>
      <UserSection>
        <UserGreeting>
          Hi {user.username}!<UserDivider>|</UserDivider>
        </UserGreeting>
        <Link url='/aact/logout'>Logout</Link>
      </UserSection>
    </StyledHeader>
  );
};

export default Header;
