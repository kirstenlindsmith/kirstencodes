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
  large = 48,
  medium = 36,
  small = 28,
}

export enum fontSizeValues {
  large = 16,
  medium = 14,
  small = 12,
}

export enum paddingValues {
  large = '8px 22px',
  medium = '6px 16px',
  small = '4px 10px',
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
