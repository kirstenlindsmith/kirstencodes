import styled, { keyframes } from 'styled-components';
import { colorValues } from '../../../../helpers/colors';

export const UserHomePage = styled.div`
  height: 100%;
`;

const slideRight = keyframes({
  from: {
    transform: 'translateX(-10rem)',
  },
  to: {
    transform: 'translateX(0)',
  },
});

const slideLeft = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(-10rem)',
  },
});

export const HamburgerMenu = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 15rem;
  font-weight: bold;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${colorValues.offWhite};
  box-shadow: 0 2px 40px 0 rgba(51, 51, 51, 0.71),
    0 2px 10px 0 rgba(51, 51, 51, 0.24);
  animation: 200ms ease-out forwards
    ${({ open }) => (open ? slideRight : slideLeft)};
`;
