import React from 'react';
import Button from '../';
import IcClose from '../../Icons/IcClose';

type Props = {
  onClose: () => void;
  iconColor?: string;
  backdropColor?: string;
} & React.ComponentPropsWithoutRef<'button'>;

const CloseButton = ({
  onClose,
  iconColor,
  backdropColor,
  style,
  ...rest
}: Props) => (
  <Button
    aria-label='Close'
    color='transparent'
    backdropColor={backdropColor}
    onClick={() => onClose()}
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
  >
    <IcClose color={iconColor} />
  </Button>
);

export default CloseButton;
