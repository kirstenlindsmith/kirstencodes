import React from 'react';
import Button from '../../Shared/Button';
import {
  Page,
  LogoSection,
  LogoEye,
  LogoEyeLids,
  LogoEyeTearDucts,
  LogoPupil,
} from './Home.style';
import logo from '../../../assets/KirstenCodes.png';

const Home = () => {
  const [eyeX, setEyeX] = React.useState(0);
  const [eyeY, setEyeY] = React.useState(0);
  // const [eyeRotation, setEyeRotation] = React.useState(0);

  const moveEye = (e: MouseEvent) => {
    const eye = document?.querySelector('#eye');
    const mouseX = eye.getBoundingClientRect().right;
    const mouseY = eye.getBoundingClientRect().top;

    // const radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    // const rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
    // setEyeRotation(rotationDegrees);
  };

  React.useEffect(() => {
    document?.addEventListener('mousemove', moveEye);
    return () => {
      document?.removeEventListener('mousemove', moveEye);
    };
  }, []);

  return (
    <Page>
      <LogoSection>
        <img src={logo} />
        <LogoEye />
        <LogoPupil id='eye' />
        <LogoEyeLids />
        <LogoEyeTearDucts />
      </LogoSection>
      <Button>CLICK ME</Button>
    </Page>
  );
};

export default Home;
