import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Shared/Button';
import { PinkPage } from '../../Shared/Shared.style';
import {
  LogoSection,
  LogoEye,
  LogoEyeLidTop,
  LogoEyeLidBottom,
  LogoEyeBorder,
  LogoPupil,
} from './Home.style';
import logo from '~/assets/KirstenCodes.png';

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
        <LogoEyeLidTop />
        <LogoEye id='eye'>
          <LogoPupil
            style={{
              left: eyeX,
              top: eyeY,
            }}
          />
        </LogoEye>
        <LogoEyeLidBottom />
        <LogoEyeBorder />
      </LogoSection>
      <Button size='large' onClick={() => navigate('/aact')}>
        ENTER
      </Button>
    </PinkPage>
  );
};

export default Home;
