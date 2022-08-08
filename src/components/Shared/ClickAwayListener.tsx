//Adapted from MUI's ClickAwayListener
import React from 'react';

type Props = {
  children: React.ReactNode;
  onClickAway: (event: MouseEvent | TouchEvent) => void;
};

const ClickAwayListener = ({ children, onClickAway }: Props) => {};

export default ClickAwayListener;
