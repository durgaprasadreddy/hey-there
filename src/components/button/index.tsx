import React, {ReactNode} from 'react';
import TextBox from '../../components/textBox';
import Loader from '../../components/loader';
import styles from './styles';
import {colors} from '../../constants/appStyles';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress: Function;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const buttonStyle = {
    ...styles.buttonStyle,
    ...props.style,
  };

  if (props.disabled) {
    buttonStyle.backgroundColor = colors.disabled;
  }

  const textStyle = {
    ...styles.buttonTxt,
    ...props.textStyle,
  };

  const onPress = () => {
    props.onPress();
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={props.disabled || props.loading}
      onPress={onPress}>
      {props.loading ? (
        <Loader />
      ) : (
        <TextBox type="title" style={{...textStyle}}>
          {props.children}
        </TextBox>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  onPress: () => null,
};

export default Button;
