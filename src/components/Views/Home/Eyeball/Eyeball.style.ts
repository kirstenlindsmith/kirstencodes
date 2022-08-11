import styled from 'styled-components';
import { ColorValue } from '../../../../helpers/colors';
import { blink } from './eyeAnimations';

export const EyeballWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const MobileEyeReplacement = styled.div`
  display: none;
  position: absolute;
  top: 46%;
  left: 33%;
  width: 5rem;
  max-width: 14%;
  height: 9rem;
  max-height: 28%;
  border-radius: 50%;
  background-color: ${ColorValue.lightBlue};
  box-shadow: -0.3rem 0.5rem 0px 0px ${ColorValue.blue};
  @media (max-width: 900px) {
    display: block;
  }
`;

export const LogoEye = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 9.35rem;
  left: 11.45rem;
  width: 5.6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: ${ColorValue.offWhite};
`;

export const TearDuctLeft = styled.div`
  position: absolute;
  z-index: 1000;
  left: 0.2rem;
  top: 0rem;
  width: 3rem;
  height: 6rem;
  border-radius: 50%;
  border-left: 0.4rem solid ${ColorValue.blue};
`;

export const TearDuctRight = styled(TearDuctLeft)`
  border-left: none;
  border-right: 0.4rem solid ${ColorValue.blue};
  left: 2.2rem;
`;

//took these out because it felt like too much,
//but they can be found at commit fb6fc49df505e7cf68ddd44182918a3d73a399dc
export const EyeLash = styled.div<{ rotate: number; left?: boolean }>`
  position: absolute;
  z-index: 10001;
  height: 2rem;
  width: 0.75rem;
  border-radius: 50%;
  border-left: ${({ left }) =>
    left ? `0.2rem solid ${ColorValue.blue}` : 'none'};
  border-right: ${({ left }) =>
    left ? 'none' : `0.2rem solid ${ColorValue.blue}`};
  transform: rotate(${({ rotate }) => rotate}deg);
`;

export const AnimatedEyeLid = styled.div`
  position: absolute;
  z-index: 10001;
  left: 11.3rem;
  top: 15rem;
  width: 5.9rem;
  height: 9rem;
  border-radius: 50%;
  border-top: 2rem solid ${ColorValue.lightBlue};
  animation: ${blink} 12s ease-in infinite;
`;

export const LogoEyeLidTop = styled.div`
  position: absolute;
  z-index: 1000;
  left: 11.3rem;
  top: 17rem;
  width: 5.9rem;
  height: 9rem;
  border-radius: 100%;
  background-color: transparent;
  box-shadow: 0px -2.5rem 0px 0px ${ColorValue.lightBlue};
`;

export const LogoEyeLidBottom = styled(LogoEyeLidTop)`
  z-index: 900;
  top: auto;
  bottom: 10rem;
  box-shadow: 0px 2.5rem 0px 0px ${ColorValue.lightBlue};
`;

export const LogoEyeBorder = styled.div`
  position: absolute;
  z-index: 1;
  left: 31.7%;
  bottom: 7rem;
  width: 5.8rem;
  height: 11rem;
  border-radius: 50%;
  background-color: ${ColorValue.blue};
`;

export const LogoPupil = styled.div`
  position: absolute;
  z-index: 100;
  left: 1.35rem;
  top: 1.6rem;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: ${ColorValue.black};
  transition: all ease-out 100ms;
`;
