import styled from 'styled-components';
import { ColorValue } from '../../../helpers/colors';

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 0.75rem;
`;

export const StyledInput = styled.input<{ value: string }>`
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 0;
  border-bottom: 1px solid ${ColorValue.black};
  margin-bottom: 1px;
  padding: 0.5rem 2rem 0.5rem 0.1rem;
  color: ${ColorValue.black};
  background-color: transparent;
  font-weight: ${({ value }) => (value.length > 0 ? 'bold' : 'normal')};
  &:focus,
  &:hover {
    border-bottom: 2px solid ${ColorValue.black};
    margin-bottom: 0;
  }
`;

export const StartIcon = styled.div`
  position: absolute;
  left: -1rem;
`;

export const EndIcon = styled.div`
  position: absolute;
  right: 1rem;
  img {
    height: 1.5rem;
    width: auto !important;
  }
`;
