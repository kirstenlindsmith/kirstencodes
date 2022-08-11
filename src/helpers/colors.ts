export enum ColorValue {
  black = '#333333',
  darkestGray = '#4d4d4d',
  darkGray = '#919191',
  gray = '#b1b1b1',
  lightGray = '#c0c0c0',
  lightestGray = '#e6e6e6',
  offWhite = '#f5f5f5',
  white = '#ffffff',
  brown = '#b08d71',
  red = '#E74C3C',
  orangeRed = '#f96645',
  orange = '#f29630',
  yellow = '#fff35e',
  green = '#74a51e',
  teal = '#12a7a3',
  lightBlue = '#77e7e5',
  mediumBlue = '#20d0ff',
  blue = '#085dfc',
  purple = '#926d8c',
  pink = '#fdb5cd',
}

// returns a value between 0 and 1 representing saturation of R, G, or B
// copied from webaim's getRGB and getsRGB functions
const getColorValue = (color: string) => {
  const colorNumber = parseInt(color, 16) / 255;
  const RGB =
    colorNumber <= 0.03928
      ? colorNumber / 12.92
      : Math.pow((colorNumber + 0.055) / 1.055, 2.4);
  return RGB;
};

// returns the perceived brightness of a hex color value
// copied from webaim's getL function
const getHexBrightness = (color: string) => {
  return (
    0.2126 * getColorValue(color.slice(1, 3)) +
    0.7152 * getColorValue(color.slice(3, 5)) +
    0.0722 * getColorValue(color.slice(-2))
  );
};

const RGBtoHexString = (R: number, G: number, B: number) =>
  '#' +
  (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + //if R/G/B are too dark or too light, set to limit
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16) //convert back to hex string
    .slice(1); //remove inevitable leading 1

export const changeHexColor = (color: string, percent: number) => {
  //parse hex format to base 16
  const colorVal = parseInt(color.replace('#', ''), 16);

  //tone-preserving color conversion
  const changeAmount = Math.round(2.55 * percent); //account for 0-255 instead of 0-100 color scale
  const R = (colorVal >> 16) + changeAmount;
  const G = (colorVal & 0x0000ff) + changeAmount;
  const B = ((colorVal >> 8) & 0x00ff) + changeAmount;

  return RGBtoHexString(R, G, B);
};

export const interactionColor = (color: string) => {
  if (color === 'transparent') return ColorValue.lightestGray;
  let percent = -15;
  const brightness = getHexBrightness(color);
  //if the color is too dark to be darkened, or too light to be lightened, reverse the goal shade
  if (
    (brightness < 0.235 && percent < 0) ||
    (brightness > 0.883 && percent > 0)
  ) {
    percent = -percent;
  }

  return changeHexColor(color, percent);
};

export const accessibleContrastColor = (
  originalColor: string,
  large?: boolean
): string => {
  const bestWCAGRatio = large ? 3.05 / 1 : 4.55 / 1; //actual WCAG AA is 3:1 and 4.5:1 but being even pickier avoids rounding errors
  let workingColor = originalColor;

  if (workingColor === 'transparent') return ColorValue.lightestGray;

  const colorVal = parseInt(workingColor.replace('#', ''), 16);
  const brightness = getHexBrightness(workingColor);

  // the following was researched from the description found here: https://stackoverflow.com/a/54247482/9530993

  const targetBrightness =
    (brightness + 0.05) * bestWCAGRatio - 0.05 > 1 //if no lighter color that meets the WCAG AA standard exists
      ? (brightness + 0.05) / bestWCAGRatio - 0.05 //then use a darker color
      : (brightness + 0.05) * bestWCAGRatio - 0.05; //otherwise find a lighter one

  const brightnessFactor = targetBrightness / brightness; //ratio between target and current brightness

  const getLuminanceFromColor = (rgbSaturation: number) =>
    Math.pow((rgbSaturation / 255 + 0.055) / 1.055, 2.4);

  const getColorFromLuminance = (rgbLuminance: number) =>
    255 * (Math.pow(rgbLuminance, 1 / 2.4) * 1.055 - 0.055);

  const R = Math.round(
    //adjust color brightness, then transform back to color value
    getColorFromLuminance(
      brightnessFactor * getLuminanceFromColor(colorVal >> 16)
    )
  );
  const G = Math.round(
    getColorFromLuminance(
      brightnessFactor * getLuminanceFromColor(colorVal & 0x0000ff)
    )
  );
  const B = Math.round(
    getColorFromLuminance(
      brightnessFactor * getLuminanceFromColor((colorVal >> 8) & 0x00ff)
    )
  );

  return RGBtoHexString(R, G, B);
};

export const hasAccessibleContrast = (
  colorA: string,
  colorB: string,
  large?: boolean
) => {
  const bestWCAGRatio = large ? 3.05 / 1 : 4.55 / 1; //actual WCAG AA is 3:1 and 4.5:1 but being even pickier avoids rounding errors
  const aBrightness = getHexBrightness(colorA);
  const bBrightness = getHexBrightness(colorB);
  const ratio =
    aBrightness > bBrightness
      ? (aBrightness + 0.05) / (bBrightness + 0.05) //forumla taken from webaim accessibility calculator
      : (bBrightness + 0.05) / (aBrightness + 0.05);

  return ratio >= bestWCAGRatio;
};
