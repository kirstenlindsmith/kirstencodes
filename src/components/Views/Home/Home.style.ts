import styled from 'styled-components';
import { ColorValue } from '../../../helpers/colors';

export const LogoSection = styled.div`
  position: relative;
  max-height: 75%;
  img {
    height: 100%;
  }
`;

export const LogoEye = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 30%;
  left: 32.1%;
  width: 5.6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: ${ColorValue.offWhite};
`;

export const TearDuctLeft = styled.div`
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0.5rem;
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

export const LogoEyeLidTop = styled.div`
  position: absolute;
  z-index: 1000;
  left: 31.6%;
  top: 54%;
  width: 5.9rem;
  height: 9rem;
  border-radius: 100%;
  background-color: transparent;
  box-shadow: 0px -2.5rem 0px 0px ${ColorValue.lightBlue};
`;

export const LogoEyeLidBottom = styled(LogoEyeLidTop)`
  z-index: 900;
  top: auto;
  bottom: 31%;
  box-shadow: 0px 2.5rem 0px 0px ${ColorValue.lightBlue};
`;

export const LogoEyeBorder = styled.div`
  position: absolute;
  z-index: 1;
  left: 31.7%;
  bottom: 22%;
  width: 16%;
  height: 34%;
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
