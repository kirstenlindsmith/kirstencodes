import React from 'react';
import {
  EyeballWrapper,
  LogoEye,
  AnimatedEyeLid,
  TearDuctLeft,
  TearDuctRight,
  LogoEyeLidTop,
  LogoEyeLidBottom,
  LogoEyeBorder,
  LogoPupil,
} from './Eyeball.style';

const eyeXStart = '1.38rem';
const eyeYStart = '1.6rem';
const eyeMinimum = '0';
const eyeMaximum = 'calc(100% - 3.1rem)';
const eyeMedLow = 'calc(100% - 5rem)';
const eyeMedHigh = 'calc(100% - 3.6rem)';

const Eyeball = () => {
  const [eyeX, setEyeX] = React.useState(eyeXStart);
  const [eyeY, setEyeY] = React.useState(eyeYStart);

  const moveEye = (e: MouseEvent) => {
    const eye = document?.querySelector('#eye');
    const eyeLeftBound = eye?.getBoundingClientRect().left ?? 0;
    const eyeRightBound = eye?.getBoundingClientRect().right ?? 0;
    const eyeTopBound = eye?.getBoundingClientRect().top ?? 0;
    const eyeBottomBound = eye?.getBoundingClientRect().bottom ?? 0;
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
    <EyeballWrapper id='eyeball'>
      <AnimatedEyeLid />
      <LogoEyeLidTop />
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
      <LogoEyeLidBottom />
      <LogoEyeBorder />
    </EyeballWrapper>
  );
};

export default Eyeball;
