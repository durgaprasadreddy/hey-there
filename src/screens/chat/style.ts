import {StyleSheet} from 'react-native';
import {spacing} from '../../constants/appStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  username: {
    fontSize: 18,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: spacing(12),
  },
});
