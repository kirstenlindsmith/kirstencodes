import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../';
import IcArrowLeft from '../../Icons/IcArrowLeft';

type Props = {
  onBack?: () => void;
} & React.ComponentPropsWithoutRef<'button'>;

const BackButton = ({ onBack, style, ...rest }: Props) => {
  const navigate = useNavigate();
  const handleClick = onBack ? onBack : () => navigate(-1);

  return (
    <Button
      aria-label='Back'
      onClick={handleClick}
      style={{
        position: 'absolute',
        left: '1rem',
        top: '1rem',
        minWidth: 0,
        width: '1.75rem',
        height: '1.75rem',
        padding: 0,
        ...(style ?? {}),
      }}
      {...rest}
      color='transparent'
    >
      <IcArrowLeft />
    </Button>
  );
};

export default BackButton;
