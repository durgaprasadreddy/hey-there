import {colors, colorsInterface} from '../../constants/appStyles';
import React, {ReactNode} from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './styles';

interface TextBoxProps {
  children?: ReactNode;
  type?: any;
  color?: colorsInterface;
  style?: TextStyle;
}

const TextBox = (props: TextBoxProps) => {
  const style = props.type ? styles[props.type] : {};
  const textStyle = () => {
    return {
      ...styles.textBox,
      ...style,
      color: colors[props.color] || props.color,
      ...props.style,
    };
  };
  return (
    <Text {...props} style={textStyle()}>
      {props.children}
    </Text>
  );
};

export default TextBox;
