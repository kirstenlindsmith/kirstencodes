import styled from 'styled-components';
import { colorValues } from '../../../helpers/colors';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${colorValues.pink};
  padding: 1.5rem;
`;

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
  background-color: ${colorValues.offWhite};
`;

export const LogoEyeLidTop = styled.div`
  position: absolute;
  z-index: 1000;
  left: 31.9%;
  top: 54%;
  width: 5.75rem;
  height: 9rem;
  border-radius: 100%;
  background-color: transparent;
  box-shadow: 0px -2.5rem 0px 0px ${colorValues.lightBlue};
`;

export const LogoEyeLidBottom = styled(LogoEyeLidTop)`
  top: auto;
  bottom: 31%;
  box-shadow: 0px 2.5rem 0px 0px ${colorValues.lightBlue};
`;

export const LogoEyeTearDucts = styled.div`
  position: absolute;
  z-index: 1;
  left: 31%;
  bottom: 26%;
  width: 17%;
  height: 25%;
  border-radius: 50%;
  background-color: ${colorValues.blue};
`;

export const LogoPupil = styled.div`
  position: absolute;
  z-index: 100;
  left: 1.35rem;
  top: 1.6rem;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: ${colorValues.black};
  transition: all ease-out 100ms;
`;
