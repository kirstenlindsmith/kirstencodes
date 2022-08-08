// NOTE: this file is adapted for ts from MUI's component of the same name
import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

// styles
const Wrapper = styled.div`
  position: relative;
  width: min-content;
  height: min-content;
`;

// types
type GenericFunction = (...args: unknown[]) => unknown;

// constants
const events = {
  once(element: Node, type: string, callback: GenericFunction) {
    const typeArray = type ? type.split(' ') : [];
    const recursiveFunction: EventListenerOrEventListenerObject = (event) => {
      event.target?.removeEventListener(event.type, recursiveFunction);
      return callback(event);
    };
    for (let i = typeArray.length - 1; i >= 0; i--) {
      this.on(element, typeArray[i], recursiveFunction);
    }
  },
  on(element: Node, type: string, callback: GenericFunction) {
    element.addEventListener?.(type, callback);
  },
  off(element: Node, type: string, callback: GenericFunction) {
    element.removeEventListener?.(type, callback);
  },
  isKeyboard(event: React.SyntheticEvent) {
    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
  },
};

const clickAwayEvents = ['mousedown', 'touchstart'];

// functions
const isDescendant: (e: Node, t: Node) => boolean = (
  element: Node,
  target: Node
) => {
  if (target !== null) {
    return (
      element === target || isDescendant(element, target.parentElement as Node)
    );
  }
  return false;
};

const bind = (callback: GenericFunction) =>
  clickAwayEvents.forEach((event) => events.on(document, event, callback));

const unbind = (callback: GenericFunction) =>
  clickAwayEvents.forEach((event) => events.off(document, event, callback));

///////// COMPONENT /////////
type Props = {
  children: React.ReactNode;
  onClickAway: GenericFunction;
};

const ClickAwayListener = ({ children, onClickAway, ...rest }: Props) => {
  const selfRef = useRef<HTMLDivElement | null>(null);

  const handleClickAway = useCallback(
    (event: React.SyntheticEvent) => {
      if (event.defaultPrevented) return;
      if (
        document.documentElement?.contains(event.target as Node) &&
        selfRef &&
        !isDescendant(selfRef.current as Node, event.target as Node)
      ) {
        onClickAway(event);
      }
    },
    [onClickAway]
  );

  useEffect(() => {
    bind(handleClickAway as GenericFunction);
    return () => unbind(handleClickAway as GenericFunction);
  }, [onClickAway, handleClickAway]);

  return (
    <Wrapper ref={selfRef} {...rest}>
      {children}
    </Wrapper>
  );
};
export default ClickAwayListener;
