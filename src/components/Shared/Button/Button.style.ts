import styled, { keyframes, css } from 'styled-components';
import { changeHexColor, colorValues } from '../../../helpers/colors';
import {
  ButtonColor,
  buttonColorDictionary,
  fontSizeValues,
  heightValues,
  paddingValues,
} from './buttonConstants';

const rotateAnimation = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const rippleAnimation = keyframes({
  to: {
    opacity: 0,
    transform: 'scale(2)',
  },
});

const pulseAnimation = keyframes({
  from: {
    opacity: 0.75,
    transform: 'scale(1.15)',
  },
  to: {
    opacity: 0,
    transform: 'scale(1.25)',
  },
});

export const buttonLoadingAnimation = css`
  #loading-svg {
    animation-name: ${rotateAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;

export const Ripple = styled.div<{ focus?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${colorValues.white};
    animation-name: ${(props) =>
      props.focus ? pulseAnimation : rippleAnimation};
    animation-duration: 850ms;
    animation-iteration-count: ${(props) => (props.focus ? 'infinite' : 1)};
    animation-timing-function: ease-out;
    animation-direction: alternate;
  }
`;

const defaultButtonStyle = {
  width: 'auto',
  fontWeight: 'bold',
  height: heightValues.medium,
  padding: paddingValues.medium,
  fontSize: fontSizeValues.medium,
  borderRadius: 4,
  minWidth: 64,
  lineHeight: 1.75,
  letterSpacing: '0.02857em',
  textTransform: 'uppercase' as any,
  boxShadow: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  verticalAlign: 'middle',
  position: 'relative' as any,
  overflow: 'hidden',
  transition: `background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
};

type ButtonBuildingProps = {
  color?: ButtonColor;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  overrideStyle?: React.CSSProperties;
};

export const buildButtonStyle: ({
  color,
  size,
  fullWidth,
  overrideStyle,
}: ButtonBuildingProps) => React.CSSProperties = ({
  color = 'primary',
  size = 'medium',
  fullWidth,
  overrideStyle = {},
}) => {
  const style = defaultButtonStyle;
  style.fontSize = fontSizeValues[size];
  style.height = heightValues[size];
  style.padding = paddingValues[size];
  style.width = fullWidth ? '100%' : 'auto';
  style.cursor = color === 'disabled' ? 'default' : 'pointer';
  return { ...style, ...overrideStyle };
};

export const StyledButton = styled.button<{
  color: ButtonColor;
  backgroundColor?: string;
  textColor?: string;
  loading?: boolean;
  disabled?: boolean;
}>`
  color: ${(props) =>
    props.disabled && !props.loading
      ? buttonColorDictionary.disabled.text
      : props.textColor ?? buttonColorDictionary[props.color].text};
  background-color: ${(props) =>
    props.disabled && !props.loading
      ? buttonColorDictionary.disabled.background
      : props.backgroundColor ?? buttonColorDictionary[props.color].background};
  border: none;
  white-space: nowrap;
  &:hover {
    background-color: ${(props) =>
      props.disabled && !props.loading
        ? buttonColorDictionary.disabled.background
        : props.backgroundColor
        ? changeHexColor(props.backgroundColor, -15)
        : buttonColorDictionary[props.color].interact};
  }
  &:focus {
    background-color: ${(props) =>
      props.disabled && !props.loading
        ? buttonColorDictionary.disabled.background
        : props.backgroundColor
        ? changeHexColor(props.backgroundColor, -15)
        : buttonColorDictionary[props.color].interact};
    outline: none;
  }
`;
