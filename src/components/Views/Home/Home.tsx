import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Shared/Button';
import { PinkPage } from '../../Shared/Shared.style';
import {
  LogoSection,
  LogoEye,
  TearDuctLeft,
  TearDuctRight,
  EyeLash,
  LogoEyeLidTop,
  LogoEyeLidBottom,
  LogoEyeBorder,
  LogoPupil,
} from './Home.style';
import logo from '../../../assets/KirstenCodes.png';

const eyeXStart = '1.38rem';
const eyeYStart = '1.6rem';
const eyeMinimum = '0';
const eyeMaximum = 'calc(100% - 3.1rem)';
const eyeMedLow = 'calc(100% - 5rem)';
const eyeMedHigh = 'calc(100% - 3.6rem)';

const Home = () => {
  const navigate = useNavigate();
  const [eyeX, setEyeX] = React.useState(eyeXStart);
  const [eyeY, setEyeY] = React.useState(eyeYStart);

  const moveEye = (e: MouseEvent) => {
    const eye = document?.querySelector('#eye');
    const eyeLeftBound = eye.getBoundingClientRect().left;
    const eyeRightBound = eye.getBoundingClientRect().right;
    const eyeTopBound = eye.getBoundingClientRect().top;
    const eyeBottomBound = eye.getBoundingClientRect().bottom;
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    const inYMidLine = mouseY > eyeTopBound && mouseY < eyeBottomBound;
    const inXMidLine = mouseX > eyeLeftBound && mouseX < eyeRightBound;

    //vertical gaze position
    if (mouseY < eyeTopBound) {
      //if mouse is above the eye
      if (eyeTopBound - mouseY > 100) {
        setEyeY(eyeMinimum);
      } else if (eyeTopBound - mouseY > 0) {
        setEyeY(eyeMedLow);
      } else setEyeY(eyeYStart);
    } else if (mouseY > eyeBottomBound) {
      //if mouse is below the eye
      if (mouseY - eyeBottomBound > 100) {
        setEyeY(eyeMaximum);
      } else if (mouseY - eyeBottomBound > 0) {
        setEyeY(eyeMedHigh); // calc(100% - 3.6rem)
      } else setEyeY(eyeYStart);
    } else if (inYMidLine) setEyeY(eyeYStart);

    //horizontal gaze position
    if (mouseX < eyeLeftBound) {
      //if mouse is left of the eye
      if (eyeLeftBound - mouseX > 100) {
        setEyeX(eyeMinimum);
      } else if (eyeLeftBound - mouseX > 0) {
        setEyeX(eyeMedLow);
      } else setEyeX(eyeXStart);
    } else if (mouseX > eyeRightBound) {
      // if mouse is right of the eye
      if (mouseX - eyeRightBound > 100) {
        setEyeX(eyeMaximum);
      } else if (mouseX - eyeRightBound > 0) {
        setEyeX(eyeMedHigh);
      } else setEyeX(eyeXStart);
    } else if (inXMidLine) setEyeX(eyeXStart);
  };

  React.useEffect(() => {
    document?.addEventListener('mousemove', moveEye);
    return () => {
      document?.removeEventListener('mousemove', moveEye);
    };
  }, []);

  return (
    <PinkPage>
      <LogoSection>
        <img src={logo} />
        <LogoEyeLidTop>
          <EyeLash
            left
            rotate={-75}
            style={{
              top: '0.8rem',
              left: '-0.4rem',
              height: '1.25rem',
            }}
          />
          <EyeLash
            left
            rotate={-55}
            style={{
              top: '0.4rem',
              left: '-0.2rem',
              height: '1.25rem',
            }}
          />
          <EyeLash
            left
            rotate={-25}
            style={{
              top: '-0.15rem',
              left: '0.3rem',
              height: '1.33rem',
            }}
          />
          <EyeLash
            left
            rotate={-45}
            style={{
              top: '-0.65rem',
              left: '0.4rem',
              height: '1.5rem',
            }}
          />
          <EyeLash
            left
            rotate={-25}
            style={{
              top: '-1.25rem',
              left: '0.8rem',
              height: '1.75rem',
              width: '1rem',
            }}
          />
          <EyeLash
            left
            rotate={-26}
            style={{
              top: '-1.55rem',
              left: '1.3rem',
              height: '1.75rem',
              width: '1rem',
            }}
          />
          <EyeLash
            left
            rotate={9}
            style={{ top: '-1.8rem', left: '2.2rem', height: '1.9rem' }}
          />
          <EyeLash
            left
            rotate={-5}
            style={{ top: '-1.99rem', left: '2.6rem' }}
          />
          <EyeLash
            rotate={18}
            style={{ top: '-1.8rem', right: '1.85rem', height: '1.89rem' }}
          />
          <EyeLash
            rotate={26}
            style={{
              top: '-1.58rem',
              right: '1.4rem',
              height: '1.75rem',
              width: '1rem',
            }}
          />
          <EyeLash
            rotate={10}
            style={{
              top: '-1.3rem',
              right: '1rem',
              height: '1.75rem',
              width: '1rem',
            }}
          />
          <EyeLash
            rotate={45}
            style={{
              top: '-0.6rem',
              right: '0.4rem',
              height: '1.5rem',
            }}
          />
          <EyeLash
            rotate={75}
            style={{
              top: '-0.15rem',
              right: '0rem',
              height: '1.5rem',
            }}
          />
          <EyeLash
            rotate={55}
            style={{
              top: '0.5rem',
              right: '-0.2rem',
              height: '1.25rem',
            }}
          />
        </LogoEyeLidTop>
        <LogoEye id='eye'>
          <TearDuctLeft />
          <LogoPupil
            style={{
              left: eyeX,
              top: eyeY,
            }}
          />
          <TearDuctRight />
        </LogoEye>
        <LogoEyeLidBottom>
          <EyeLash
            left
            rotate={35}
            style={{ bottom: '0', left: '0.7rem', height: '0.75rem' }}
          />
          <EyeLash
            left
            rotate={20}
            style={{ bottom: '-0.75rem', left: '1.4rem', height: '1rem' }}
          />
          <EyeLash
            left
            rotate={24}
            style={{ bottom: '-0.95rem', left: '1.8rem', height: '1rem' }}
          />
          <EyeLash
            left
            rotate={0}
            style={{ bottom: '-1.15rem', left: '2.6rem', height: '1.15rem' }}
          />
          <EyeLash
            rotate={-30}
            style={{ bottom: '-0.98rem', right: '2rem', height: '1rem' }}
          />
          <EyeLash
            rotate={-20}
            style={{ bottom: '-0.85rem', right: '1.6rem', height: '1rem' }}
          />
          <EyeLash
            rotate={-35}
            style={{ bottom: '0', right: '0.7rem', height: '0.75rem' }}
          />
        </LogoEyeLidBottom>
        <LogoEyeBorder />
      </LogoSection>
      <Button size='large' onClick={() => navigate('/aact')}>
        ENTER
      </Button>
    </PinkPage>
  );
};

export default Home;
