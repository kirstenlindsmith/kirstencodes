import { colorValues, changeHexColor } from '../../../helpers/colors';

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

export type ButtonColor = 'red' | 'orange' | 'blue' | 'disabled';

export type ButtonSize = 'small' | 'medium' | 'large';

export const buttonColorDictionary = {
  red: {
    text: colorValues.white,
    background: colorValues.orangeRed,
    interact: changeHexColor(colorValues.orangeRed, -15),
  },
  orange: {
    text: colorValues.white,
    background: colorValues.orange,
    interact: changeHexColor(colorValues.orange, -15),
  },
  blue: {
    text: colorValues.white,
    background: colorValues.blue,
    interact: changeHexColor(colorValues.blue, -15),
  },
  disabled: {
    text: colorValues.white,
    background: colorValues.lightGray,
    interact: colorValues.lightGray,
  },
};
