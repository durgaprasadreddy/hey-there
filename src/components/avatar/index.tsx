import * as React from 'react';
import {Image, View, ViewStyle} from 'react-native';
import {spacing} from '../../constants/appStyles';
import styles from './style';

interface AvatarProps {
  source: {uri: string};
  size: number;
  style?: ViewStyle;
}

const Avatar = (props: AvatarProps) => {
  const style: ViewStyle = {
    ...styles.container,
    height: spacing(props.size),
    width: spacing(props.size),
    borderRadius: spacing(props.size / 2),
  };
  return (
    <View style={[styles.container, style, props.style]}>
      <Image source={props.source} style={styles.image} resizeMode="contain" />
    </View>
  );
};

Avatar.defaultProps = {
  size: 40,
};

export default Avatar;
