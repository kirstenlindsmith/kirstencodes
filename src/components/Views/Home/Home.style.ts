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
  bottom: 25%;
  left: 32%;
  width: 15%;
  height: 27%;
  border-radius: 50%;
  background: ${colorValues.offWhite};
`;

export const LogoEyeLids = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 24%;
  left: 32%;
  width: 15%;
  height: 29%;
  border-radius: 50%;
  background: ${colorValues.blue};
`;

export const LogoEyeTearDucts = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 26%;
  left: 31%;
  width: 17%;
  height: 25%;
  border-radius: 50%;
  background: ${colorValues.lightBlue};
`;

export const LogoPupil = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 33%;
  left: 27%;
  height: 40%;
  width: 64%;
  border-radius: 50%;
  background: ${colorValues.black};
`;
