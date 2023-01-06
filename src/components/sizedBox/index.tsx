import React from 'react';
import {View} from 'react-native';
import {spacing} from '../../constants/appStyles';

interface SizedBoxProps {
  height: number;
  width: number;
}

const SizedBox = (props: SizedBoxProps) => {
  const style = {
    height: spacing(props.height),
    width: spacing(props.width),
  };
  return <View style={style} />;
};

SizedBox.defaultProps = {
  height: 10,
  width: 10,
};

export default SizedBox;
