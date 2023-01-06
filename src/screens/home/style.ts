import {StyleSheet} from 'react-native';
import {colors, spacing} from '../../constants/appStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  title: {
    textAlign: 'center',
    marginTop: spacing(20),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
});
