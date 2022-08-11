import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Shared/Button';
import Eyeball from './Eyeball';
import { HomePage, LogoSection, MobileEyeReplacement } from './Home.style';
import logo from '../../../assets/KirstenCodes.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomePage>
      <LogoSection>
        <img src={logo} />
        <MobileEyeReplacement />
        <Eyeball />
      </LogoSection>
      <Button size='large' onClick={() => navigate('/aact')}>
        ENTER
      </Button>
    </HomePage>
  );
};

export default Home;
