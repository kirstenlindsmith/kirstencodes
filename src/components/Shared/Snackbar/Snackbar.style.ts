import styled, { keyframes } from 'styled-components';
import { colorValues } from '../../../helpers/colors';

const slideInAnimation = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-3rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

export const StyledSnackbar = styled.div<{ open: boolean }>`
  z-index: 10000;
  position: fixed;
  left: 0.5rem;
  right: 0.5rem;
  top: 0.5rem;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const SnackbarContent = styled.div<{ error?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 50%;
  padding: 0.85rem 5rem 0.85rem 1rem;
  border-radius: 0.4rem;
  color: ${colorValues.white};
  background-color: ${({ error }) =>
    error ? colorValues.orangeRed : colorValues.green};
  animation: 200ms ease-out forwards ${slideInAnimation};
`;
