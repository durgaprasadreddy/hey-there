import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './style';

export interface PopupViewProps {
  children: React.ReactNode;
  visible: boolean;
  onRequestClose: Function;
  containerStyle?: StyleProp<ViewStyle>;
  cardStyle?: StyleProp<ViewStyle>;
}

const PopupView = (props: PopupViewProps) => (
  <Modal
    transparent
    visible={props.visible}
    onRequestClose={props.onRequestClose}>
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.onRequestClose}
      style={[styles.container, props.containerStyle]}>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.cardStyle, props.cardStyle]}>
        {props.children || <View />}
      </TouchableOpacity>
    </TouchableOpacity>
  </Modal>
);

export default PopupView;
