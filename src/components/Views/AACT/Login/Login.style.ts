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

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 0.75rem;
`;

export const Input = styled.input<{ value?: string }>`
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-bottom: 1px solid ${ColorValue.black};
  margin-bottom: 1px;
  padding: 0.5rem 2rem 0.5rem 0.1rem;
  color: ${ColorValue.black};
  font-weight: ${({ value }) => (value.length > 0 ? 'bold' : 'normal')};
  &:focus,
  &:hover {
    border-bottom: 2px solid ${ColorValue.black};
    margin-bottom: 0;
  }
`;
