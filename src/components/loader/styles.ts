import {StyleSheet} from 'react-native';
import {colors, spacing} from '../../constants/appStyles';

export default StyleSheet.create({
  fullScreenAnimation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  logoSpinnerImage: {
    height: spacing(60),
    width: spacing(60),
  },
});
