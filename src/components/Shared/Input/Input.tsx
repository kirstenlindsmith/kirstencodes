import React from 'react';
import {
  InputWrapper,
  InputLabel,
  StyledInput,
  StartIcon,
  EndIcon,
} from './Input.style';

type Props = {
  value: string;
  setValue: (newValue: string) => void;
  name: string;
  label?: string;
  endIcon?: React.ReactNode;
  wrapperStyle?: React.CSSProperties;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = ({
  name,
  label,
  value,
  setValue,
  endIcon,
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
      useEndIcon={!!endIcon}
      onChange={(e) => setValue(e.currentTarget.value)}
      {...rest}
    />
    {endIcon ? <EndIcon>{endIcon}</EndIcon> : null}
  </InputWrapper>
);

export default Input;
