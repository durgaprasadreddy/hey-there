import {StyleSheet} from 'react-native';
import {colors, spacing} from '../../constants/appStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  cardStyle: {
    backgroundColor: colors.white,
    width: '85%',
    borderRadius: 5,
    padding: spacing(15),
  },
});
