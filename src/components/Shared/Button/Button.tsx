import React from 'react';
import {} from 'styled-components/cssprop';

//helpers
import {
  bestTextColor,
  changeHexColor,
  colorValues,
} from '../../../helpers/colors';
import { ButtonColor, ButtonSize } from './buttonConstants';

//assets
import IcSuccess from '../Icons/IcSuccess';
import IcLoading from '../Icons/IcLoading';
import IcWarning from '../Icons/IcWarning';

//styles
import {
  buttonLoadingAnimation,
  buildButtonStyle,
  Ripple,
  StyledButton,
} from './Button.style';

type BasicProps = React.ComponentPropsWithoutRef<'button'>;

type Props = {
  children: React.ReactNode;
  loading?: boolean;
  success?: boolean;
  error?: boolean;
  color?: ButtonColor;
  size?: ButtonSize;
  fullWidth?: boolean;
  svgColor?: string;
} & BasicProps;

const defaultState: {
  rippleCount: number;
  rippleStyle: {
    [key: string]: any;
  };
} = {
  rippleCount: 0,
  rippleStyle: {},
};

const Button = ({
  children,
  loading,
  success,
  error,
  color,
  size,
  fullWidth,
  svgColor,
  disabled,
  ...rest
}: Props) => {
  const bestButtonColor =
    (disabled && ButtonColor.disabled) || (color ?? ButtonColor.primary);
  const [isFocused, setFocused] = React.useState<boolean | undefined>(false);
  const [rippleCount, setRippleCount] = React.useState(
    defaultState.rippleCount
  );
  const [rippleStyles, setRippleStyle] = React.useState(
    defaultState.rippleStyle
  );
  const [rippleTimeout, setRippleTimeout] = React.useState<
    number | undefined
  >();

  //cleanup ripple effects on dismount
  React.useEffect(() => {
    return () => {
      if (rippleTimeout) clearTimeout(rippleTimeout);
    };
  }, [rippleTimeout]);

  const findImportantProps = () => {
    let background: string | undefined;
    let textColor: string | undefined;
    let styles = {};
    let onClick: ((e: any) => void) | undefined;

    const { style: parentStyles, onClick: parentOnClick, ...other } = rest;

    if (parentOnClick) {
      onClick = (e: any) => {
        e?.preventDefault?.();
        parentOnClick(e);
      };
    }

    if (parentStyles) {
      const {
        backgroundColor,
        color: parentTextColor,
        ...otherParentStyles
      } = parentStyles;
      textColor =
        parentTextColor ||
        (backgroundColor ? bestTextColor(backgroundColor) : undefined);
      background = backgroundColor;
      const cloneStyles = styles;
      styles = { ...cloneStyles, ...otherParentStyles };
    }
    return {
      onClick,
      background,
      textColor,
      styles,
      other,
    };
  };

  const allProps = findImportantProps();
  const buttonStyles = buildButtonStyle({
    size,
    fullWidth,
    overrideStyle: allProps?.styles,
    color: bestButtonColor,
  });

  const loadingIconColor =
    svgColor || allProps?.textColor || bestTextColor(allProps.background);

  const addRipple = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.FocusEvent<HTMLButtonElement>,
    focus?: boolean
  ) => {
    if (!disabled) {
      setFocused(focus);
      const rippleContainer = e?.currentTarget;
      const rippleSize = rippleContainer?.offsetWidth ?? 0;
      const position = rippleContainer?.getBoundingClientRect();
      const x = focus
        ? 'auto'
        : ((e as React.MouseEvent<HTMLDivElement, MouseEvent>)?.pageX ?? 0) -
          (position?.x ?? 0) -
          rippleSize / 2;
      const y = focus
        ? 'auto'
        : ((e as React.MouseEvent<HTMLDivElement, MouseEvent>)?.pageY ?? 0) -
          (position?.y ?? 0) -
          rippleSize / 2;

      const newRippleStyle = {
        top: focus ? y : y + 'px',
        left: focus ? x : x + 'px',
        height: rippleSize + 'px',
        width: rippleSize + 'px',
      };
      const newRippleCount = rippleCount + 1;

      setRippleStyle((current) => ({
        ...current,
        [newRippleCount]: newRippleStyle,
      }));
      setRippleCount(newRippleCount);
    }
  };

  const cleanUpRipple = (
    _e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.FocusEvent<HTMLButtonElement>
  ) => {
    if (isFocused) setFocused(false);
    if (rippleTimeout) clearTimeout(rippleTimeout);

    const newRippleTimeout = setTimeout(() => {
      setRippleCount(defaultState.rippleCount);
      setRippleStyle(defaultState.rippleStyle);
    }, 800);

    setRippleTimeout(newRippleTimeout as any);
  };

  const renderRipple = () => {
    //using the styles object allows for unlimited simultaneous ripples
    const ripples = Object.keys(rippleStyles);
    if (ripples?.length) {
      return ripples?.map((key, index) => {
        return (
          <span key={`ripple-${index}`} style={{ ...rippleStyles[key] }} />
        );
      });
    } else return null;
  };

  return (
    <StyledButton
      color={bestButtonColor}
      backgroundColor={allProps?.background}
      textColor={allProps?.textColor}
      css={buttonLoadingAnimation}
      style={{
        ...buttonStyles,
        ...allProps?.styles,
      }}
      loading={loading}
      disabled={disabled || loading} // loading state prevents multiple clicks
      onFocus={(e) => {
        //if the focus is coming from something other than a click event,
        //there won't be any other ripples added
        if (Object.keys(rippleStyles)?.length < 1) {
          addRipple(e, true);
        }
      }}
      //only run cleanup on blur, allowing ripples to play and fade uninterrupted until button out of use
      onBlur={cleanUpRipple}
      onClick={allProps.onClick}
      {...allProps?.other}
    >
      {(error && <IcWarning color={loadingIconColor} aria-label='ERROR' />) ||
        (success && (
          <IcSuccess color={loadingIconColor} aria-label='SUCCESS' />
        )) ||
        (loading && (
          <IcLoading color={loadingIconColor} aria-label='LOADING' />
        )) ||
        children}
      <Ripple focus={isFocused} onMouseDown={addRipple}>
        {renderRipple()}
      </Ripple>
    </StyledButton>
  );
};

export default Button;
