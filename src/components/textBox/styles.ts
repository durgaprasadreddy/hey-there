import {StyleSheet} from 'react-native';
import {colors, fontSizes, spacing} from '../../constants/appStyles';

export default StyleSheet.create({
  textBox: {
    color: colors.lightBlack,
    fontSize: fontSizes.body3,
  },
  extraLarge: {
    fontSize: fontSizes.extraLarge,
  },
  large: {
    fontSize: fontSizes.large,
  },
  h1: {
    fontSize: fontSizes.h1,
    fontWeight: '600',
  },
  h2: {
    fontSize: fontSizes.h2,
    fontWeight: '600',
  },
  h3: {
    fontSize: fontSizes.h3,
    fontWeight: '600',
  },
  h4: {
    fontSize: fontSizes.h4,
    fontWeight: '600',
  },
  h5: {
    fontSize: fontSizes.h5,
    fontWeight: '600',
  },
  h6: {
    fontSize: fontSizes.h6,
    fontWeight: '600',
  },
  body1: {
    fontSize: fontSizes.body1,
  },
  body2: {
    fontSize: fontSizes.body2,
  },
  body3: {
    fontSize: fontSizes.body3,
  },
  subtitle1: {
    fontSize: fontSizes.subtitle1,
  },
  subtitle2: {
    fontSize: fontSizes.subtitle2,
  },
  caption: {
    fontSize: fontSizes.caption,
  },
  small: {
    fontSize: fontSizes.small,
  },
  xSmall: {
    fontSize: fontSizes.xSmall,
  },
  tableTitle: {
    fontSize: fontSizes.subtitle1,
    color: colors.orangeBlack,
    marginBottom: spacing(5),
  },
  tableSubTitle: {
    fontSize: fontSizes.subtitle1,
    color: colors.gray2,
  },
  error: {
    fontSize: fontSizes.small,
    color: colors.red,
    marginTop: spacing(5),
  },
});
