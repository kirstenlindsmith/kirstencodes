import React from 'react';
import Button from '../';
import IcClose from '../../Icons/IcClose';

const CloseButton = ({
  onClose,
  iconColor,
  backdropColor,
  style,
  ...rest
}: {
  onClose: () => void;
  iconColor?: string;
  backdropColor?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => (
  <Button
    aria-label='Close'
    onClick={() => onClose()}
    backdropColor={backdropColor}
    style={{
      position: 'absolute',
      right: '1rem',
      top: '1rem',
      minWidth: 0,
      width: '1.75rem',
      height: '1.75rem',
      padding: 0,
      ...(style ?? {}),
    }}
    {...rest}
    color='clear'
  >
    <IcClose color={iconColor} />
  </Button>
);

export default CloseButton;
