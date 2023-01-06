import {StyleSheet} from 'react-native';
import {colors, spacing} from '../../constants/appStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messageView: {
    margin: spacing(15),
  },
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 12,
  },
  messageTextView: {
    width: '60%',
    padding: spacing(10),
    borderRadius: 10,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing(20),
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,

    borderColor: colors.lightGray,
    padding: spacing(10),
    flex: 1,
  },
  emptyMessageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
