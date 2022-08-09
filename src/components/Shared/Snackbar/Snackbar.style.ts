import styled, { keyframes } from 'styled-components';
import { colorValues } from '../../../helpers/colors';

const slideDown = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-3rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

export const StyledSnackbar = styled.div`
  z-index: 10000;
  position: fixed;
  left: 0.5rem;
  right: 0.5rem;
  top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SnackbarContent = styled.div<{
  error?: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  word-break: break-word;
  min-height: 3.75rem;
  max-width: 50%;
  padding: 1rem 5rem 1rem 1rem;
  border-radius: 0.4rem;
  color: ${colorValues.white};
  background-color: ${({ error }) =>
    error ? colorValues.orangeRed : colorValues.green};
  animation: 200ms ease-out forwards ${slideDown};
`;
