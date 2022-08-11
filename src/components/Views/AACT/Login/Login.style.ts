import styled from 'styled-components';
import { ColorValue } from '../../../../helpers/colors';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
`;

export const FormSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 19rem;
  padding: 10vh 0 1.25rem;
  h1 {
    color: ${ColorValue.black};
    margin: 0.5rem 0 2rem;
  }
  img {
    width: 5.5rem;
  }
  @media (max-width: 900px) {
    width: 50%;
  }
`;
