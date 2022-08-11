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
    backdropColor={backdropColor}
    onClick={() => onClose()}
    size='tiny'
    style={{
      position: 'absolute',
      right: '1rem',
      top: '1rem',
      ...(style ?? {}),
    }}
    {...rest}
    color='transparent'
  >
    <IcClose color={iconColor} />
  </Button>
);

export default CloseButton;
