import {
  ColorValue,
  interactionColor,
  hasAccessibleContrast,
} from '../../../helpers/colors';

export const useBlackText = (color?: string, large?: boolean) => {
  if (!color || color === 'transparent') {
    return true;
  }
  const blackContrast = hasAccessibleContrast(color, ColorValue.black, large);
  return blackContrast;
};

export const bestTextColor = (color?: string) =>
  useBlackText(color) ? ColorValue.black : ColorValue.white;

export enum heightValues {
  large = '3rem',
  medium = '2.25rem',
  small = '1.75rem',
}

export enum fontSizeValues {
  large = '1.125rem',
  medium = '1rem',
  small = '0.875rem',
}

export enum paddingValues {
  large = '0.5rem 1.375rem',
  medium = '0.375rem 1rem',
  small = '0.25rem 0.625rem',
}

export type ButtonColor =
  | 'red'
  | 'orange'
  | 'blue'
  | 'transparent'
  | 'disabled';

export type ButtonSize = 'small' | 'medium' | 'large';

export const buttonColorDictionary = {
  red: {
    text: ColorValue.white,
    background: ColorValue.orangeRed,
    interact: interactionColor(ColorValue.orangeRed),
  },
  orange: {
    text: ColorValue.white,
    background: ColorValue.orange,
    interact: interactionColor(ColorValue.orange),
  },
  blue: {
    text: ColorValue.white,
    background: ColorValue.blue,
    interact: interactionColor(ColorValue.blue),
  },
  transparent: {
    text: ColorValue.black,
    background: 'transparent',
    interact: ColorValue.lightestGray,
  },
  disabled: {
    text: ColorValue.white,
    background: ColorValue.lightGray,
    interact: ColorValue.lightGray,
  },
};
