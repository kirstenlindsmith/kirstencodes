import { ColorValue, changeHexColor } from '../../../helpers/colors';

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
    interact: changeHexColor(ColorValue.orangeRed, -15),
  },
  orange: {
    text: ColorValue.white,
    background: ColorValue.orange,
    interact: changeHexColor(ColorValue.orange, -15),
  },
  blue: {
    text: ColorValue.white,
    background: ColorValue.blue,
    interact: changeHexColor(ColorValue.blue, -15),
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
