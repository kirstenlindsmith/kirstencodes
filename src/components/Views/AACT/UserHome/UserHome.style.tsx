import styled from 'styled-components';
import { colorValues } from '../../../../helpers/colors';

export const UserHomePage = styled.div`
  height: 100%;
  background-color: ${colorValues.offWhite};
`;

export const MainContainer = styled.div`
  height: calc(100% - 10rem);
  box-sizing: border-box;
  padding: 1.5rem 1.5rem 1.5rem 6.5rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 5.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${colorValues.white};
  img {
    height: 5rem;
    object-fit: contain;
  }
`;

export const PageBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
`;

export const BodyCard = styled.div`
  flex-grow: 1;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${colorValues.white};
`;

export const Footer = styled.footer`
  width: 100%;
  height: 10rem;
  padding: 1.25rem 1rem 1rem 6.5rem;
  color: ${colorValues.darkestGray};
  background: linear-gradient(
    0deg,
    rgba(119, 231, 229, 1) 0%,
    rgba(245, 245, 245, 1) 90%
  );
`;
