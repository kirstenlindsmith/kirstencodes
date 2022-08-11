import React from 'react';
import styled from 'styled-components';
import { ColorValue } from '../../../../helpers/colors';

export const UserHomePage = styled.div`
  height: 100%;
  background-color: ${ColorValue.offWhite};
  * {
    box-sizing: border-box;
  }
`;

export const MainContainer = styled.div`
  height: calc(100% - 10rem);
  margin-bottom: 1.5rem;
  padding: 1.5rem 1.5rem 1.5rem 6.5rem;
`;

export const PageBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 5.5rem);
  margin: 1.5rem 0;
`;

export const BodyCard = styled.div`
  flex-grow: 1;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${ColorValue.white};
`;

export const tableCardStyles: React.CSSProperties = {
  width: '50rem',
  marginRight: '1.5rem',
  paddingRight: '0.25rem',
  paddingBottom: '1.5rem',
};
