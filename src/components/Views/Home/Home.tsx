import React from 'react';
import Button from '../../Shared/Button';
import {
  Page,
  LogoSection,
  LogoEye,
  LogoEyeLidTop,
  LogoEyeLidBottom,
  LogoEyeTearDucts,
  LogoPupil,
} from './Home.style';
import logo from '../../../assets/KirstenCodes.png';

const eyeXStart = '1.35rem';
const eyeYStart = '1.6rem';
const eyeMinimum = '0';
const eyeMaximum = 'calc(100% - 3.1rem)';
const eyeMedTop = 'calc(100% - 5.1rem)';
const eyeMedBottom = 'calc(100% - 3.7rem);';
const eyeMedLeft = 'calc(100% - 5rem)';
const eyeMedRight = 'calc(100% - 3.6rem);';

const Home = () => {
  const [eyeX, setEyeX] = React.useState(eyeXStart);
  const [eyeY, setEyeY] = React.useState(eyeYStart);
  // const [eyeRotation, setEyeRotation] = React.useState(0);

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
    console.log(
      // 'eyeLeftBound:',
      // eyeLeftBound,
      // 'eyeRightBound:',
      // eyeRightBound,
      // '\n',
      // 'eyeTopBound:',
      // eyeTopBound,
      // 'eyeBottomBound:',
      // eyeBottomBound,
      // '\n',
      'mouseX:',
      mouseX,
      'mouseY:',
      mouseY,
      '\n',
      'mouseX - eyeRightBound:',
      mouseX - eyeRightBound,
      '\n',
      'eyeTopBound - mouseY:',
      eyeTopBound - mouseY,
      '\n',
      'mouseY - eyeBottomBound:',
      mouseY - eyeBottomBound
    );

    //vertical gaze position
    if (mouseY < eyeTopBound) {
      //if mouse is above the eye
      if (eyeTopBound - mouseY > 100) {
        setEyeY(eyeMinimum);
      } else if (eyeTopBound - mouseY > 0) {
        setEyeY(eyeMedTop);
      } else setEyeY(eyeYStart);
    } else if (mouseY > eyeBottomBound) {
      //if mouse is below the eye
      if (mouseY - eyeBottomBound > 100) {
        setEyeY(eyeMaximum);
      } else if (mouseY - eyeBottomBound > 0) {
        setEyeY(eyeMedBottom);
      } else setEyeY(eyeYStart);
    } else if (inYMidLine) setEyeY(eyeYStart);

    //horizontal gaze position
    if (mouseX < eyeLeftBound) {
      //if mouse is left of the eye
      if (eyeLeftBound - mouseX > 100) {
        setEyeX(eyeMinimum);
      } else if (eyeLeftBound - mouseX > 0) {
        setEyeX(eyeMedLeft);
      } else setEyeX(eyeXStart);
    } else if (mouseX > eyeRightBound) {
      //if mouse is right of the eye
      if (mouseX - eyeRightBound > 100) {
        setEyeX(eyeMaximum);
      } else if (mouseX - eyeRightBound > 0) {
        setEyeX(eyeMedRight);
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
    <Page>
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
        <LogoEyeTearDucts />
      </LogoSection>
      <Button>CLICK ME</Button>
    </Page>
  );
};

export default Home;
