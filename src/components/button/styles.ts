import {colors, spacing, fontSize} from '../../constants/appStyles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: spacing(15),
    borderRadius: 100,
    width: '100%',
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  outlined: {
    backgroundColor: colors.tintLight,
    borderColor: colors.primary,
  },
  buttonTxt: {
    color: colors.white,
    fontSize: fontSize(16),
    fontWeight: '400',
    backgroundColor: 'transparent',
  },
  primaryButtonTxt: {
    color: colors.white,
  },
  outlinedButtonTxt: {
    color: colors.black,
  },
  iconView: {
    paddingRight: spacing(10),
  },
});
