import {StyleSheet} from 'react-native';
import {colors, spacing} from '../../constants/appStyles';

export default StyleSheet.create({
  container: {
    borderRadius: 50,
    borderWidth: 3,
    height: spacing(40),
    width: spacing(40),
    borderColor: colors.white,
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 50,
  },
});
