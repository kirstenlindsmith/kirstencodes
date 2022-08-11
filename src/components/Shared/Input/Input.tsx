import React from 'react';
import { InputWrapper, InputLabel, StyledInput } from './Input.style';

type Props = {
  value: string;
  setValue: (newValue: string) => void;
  name: string;
  label?: string;
  wrapperStyle?: React.CSSProperties;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = ({
  name,
  label,
  value,
  setValue,
  wrapperStyle,
  ...rest
}: Props) => (
  <InputWrapper style={wrapperStyle ?? {}}>
    {(label?.length ?? 0) > 0 ? (
      <InputLabel htmlFor='name'>{label}</InputLabel>
    ) : null}
    <StyledInput
      type='text'
      name='name'
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      {...rest}
    />
  </InputWrapper>
);

export default Input;
