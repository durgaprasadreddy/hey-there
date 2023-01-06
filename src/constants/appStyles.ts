import {Dimensions, Platform, PixelRatio} from 'react-native';

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

export interface colorsInterface {
  primary: Color;
  primaryLight: Color;
  primaryDark: Color;
  white: Color;
  black: Color;
  gray: Color;
  lightGray: Color;
  darkGray: Color;
  borderGray: Color;
  disabled: Color;
  red: Color;
}

export const colors: colorsInterface = {
  primary: '#4A86E8',
  primaryLight: '#B9C4FF',
  primaryDark: '#2A43C8',
  white: '#fff',
  black: '#000',
  gray: '#b0b0b0',
  lightGray: '#C7C8CE',
  darkGray: '#393939',
  borderGray: '#eeeeee',
  disabled: '#e9ecef',
  red: '#FF0000',
};

export const fonts = {
  // Custom Fonts
};

const widthPercentageToDP = (
  iphoneWidthPercent: any,
  androidWidthPercent = iphoneWidthPercent,
) => {
  const elemWidth =
    typeof iphoneWidthPercent === 'number'
      ? isIos
        ? iphoneWidthPercent
        : androidWidthPercent
      : parseFloat(isIos ? iphoneWidthPercent : androidWidthPercent);
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100);
};

export const HeightPercentageToDP = (
  iphoneHeightPercent: any,
  androidHeightPercent = iphoneHeightPercent,
) => {
  const elemHeight =
    typeof iphoneHeightPercent === 'number'
      ? isIos
        ? iphoneHeightPercent
        : androidHeightPercent
      : parseFloat(isIos ? iphoneHeightPercent : androidHeightPercent);
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
};

export const deviceDimensions = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  WPTDP: widthPercentageToDP,
  HPTDP: HeightPercentageToDP,
  WHRatio: SCREEN_WIDTH / SCREEN_HEIGHT,
};

export const heiWidScale = 0.125;

export const heiWidScale2 = deviceDimensions.WHRatio < 0.5 ? 0.125 : 0.15;

export const scales2 = (size: number) => {
  return deviceDimensions.HPTDP(heiWidScale2 * size);
};

export const fontSize = (size: number) => {
  const fontScale = deviceDimensions.WHRatio < 0.5 ? 0.123 : 0.135;
  return deviceDimensions.HPTDP(fontScale * size);
};

export const fontSizes = {
  extraLarge: fontSize(72), // 72
  large: fontSize(58), // 58
  h1: fontSize(30),
  h2: fontSize(28),
  h3: fontSize(26),
  h4: fontSize(24),
  h5: fontSize(22),
  h6: fontSize(20),
  body1: fontSize(18), // 18
  body2: fontSize(16),
  body3: fontSize(15),
  subtitle1: fontSize(14),
  subtitle2: fontSize(13),
  caption: fontSize(12),
  small: fontSize(10),
  xSmall: fontSize(8),
};

export const marginPaddingScale = deviceDimensions.WHRatio < 0.5 ? 0.125 : 0.11;
export const svgWidthScale = 0.122;
export const svgHeightScale = 0.126;

export const spacing = (size: number) => {
  return deviceDimensions.HPTDP(marginPaddingScale * size);
};

export const boxShadow = {
  elevation: 20,
  shadowColor: colors.gray,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.27,
  shadowRadius: 8,
};

export const HORIZONTAL_SPACE = spacing(15);
