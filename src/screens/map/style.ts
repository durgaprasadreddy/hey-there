import {StyleSheet} from 'react-native';
import {fontSizes, spacing} from '../../constants/appStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    alignItems: 'center',
  },
  nameView: {
    height: spacing(30),
  },
  username: {
    fontSize: fontSizes.subtitle1,
  },
  rangeFilter: {
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 20,
    position: 'absolute',
    right: spacing(10),
    bottom: spacing(10),
    paddingHorizontal: spacing(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderContainer: {
    flex: 1,
    marginRight: spacing(10),
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  avatarView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 12,
  },
  locationText: {
    fontWeight: 'bold',
  },
  popupButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatButton: {
    paddingVertical: spacing(10),
    width: spacing(130),
  },
});
