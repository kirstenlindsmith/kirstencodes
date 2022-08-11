import styled from 'styled-components';
import { ColorValue } from '../../helpers/colors';

export const PinkPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${ColorValue.pink};
  padding: 1.5rem;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BlueH1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${ColorValue.blue};
`;

export const StackedButtons = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 1rem;
  }
`;
