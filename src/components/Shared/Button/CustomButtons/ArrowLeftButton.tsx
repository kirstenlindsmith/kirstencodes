import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../';
import IcArrowLeft from '../../Icons/IcArrowLeft';

type Props = {
  onClick?: () => void;
} & React.ComponentPropsWithoutRef<'button'>;

const ArrowLeftButton = ({ onClick, style, ...rest }: Props) => {
  const navigate = useNavigate();
  const handleClick = onClick ? onClick : () => navigate(-1); // back button by default

  return (
    <Button
      aria-label='Back' // back button by default
      onClick={handleClick}
      size='tiny'
      style={{
        position: 'absolute',
        left: '1rem',
        top: '1rem',
        ...(style ?? {}),
      }}
      {...rest}
      color='transparent'
    >
      <IcArrowLeft />
    </Button>
  );
};

export default ArrowLeftButton;
