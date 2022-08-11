import styled from 'styled-components';
import { PinkPage } from '../../Shared/Shared.style';
import { ColorValue } from '../../../helpers/colors';

export const HomePage = styled(PinkPage)`
  @media (max-width: 900px) {
    button {
      height: 4rem !important;
      font-size: 1.5rem !important;
    }
  }
`;

export const LogoSection = styled.div`
  position: relative;
  max-height: 32rem;
  img {
    height: 100%;
  }
  @media (max-width: 900px) {
    img {
      height: auto;
      max-height: 100%;
      max-width: 100vw;
    }
    #eyeball {
      display: none;
    }
  }
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
