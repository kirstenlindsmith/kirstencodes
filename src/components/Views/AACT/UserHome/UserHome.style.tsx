import styled, { keyframes } from 'styled-components';
import Link from '../../../Shared/Link';
import { colorValues } from '../../../../helpers/colors';

export const UserHomePage = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 1.25rem 1rem 1rem 6.5rem;
  background-color: ${colorValues.offWhite};
`;

const slideRight = keyframes({
  from: {
    transform: 'translateX(-14rem)',
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
    transform: 'translateX(-14rem)',
  },
});

export const HamburgerMenu = styled.div<{ open: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: 0;
  top: 0;
  bottom: 0;
  width: 19rem;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem 2rem 2rem;
  border-radius: 0 1rem 1rem 0;
  font-weight: bold;
  cursor: pointer;
  background-color: ${colorValues.white};
  box-shadow: 0 2px 30px 0 rgba(51, 51, 51, 0.4),
    0 2px 10px 0 rgba(51, 51, 51, 0.1);
  animation: 200ms ease-out forwards
    ${({ open }) => (open ? slideRight : slideLeft)};
  img {
    object-fit: contain;
  }
`;

export const MenuLogo = styled.img`
  height: 5rem;
  margin-left: -0.5rem;
`;

export const KirstenLogo = styled.img`
  position: fixed;
  bottom: 0.8rem;
  left: 1rem;
  height: 4rem;
`;

export const MenuItemSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MenuItemLogo = styled.img`
  position: absolute;
  right: 1rem;
  top: 0.3rem;
  height: 1.5rem;
`;

const MenuItem = styled(Link)`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0.75rem 0;
  padding: 0.5rem;
  outline: none;
  border: none;
  img {
    border-radius: 0.5rem;
    padding: 0.2rem;
  }
  &:focus img,
  &:hover img {
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export const MenuMainItem = styled(MenuItem)`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const MenuSubItem = styled(MenuItem)`
  position: relative;
  width: calc(100% - 1rem);
  margin-left: 1rem;
  font-size: 0.875rem;
  color: ${colorValues.darkestGray};
`;
