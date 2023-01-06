import {colors} from '../../constants/appStyles';
import propTypes from 'prop-types';
import React from 'react';
import {ActivityIndicator, ViewStyle} from 'react-native';

interface LoaderProps {
  color?: any;
  style?: ViewStyle;
  large?: boolean;
  size?: any;
}

const Loader = (props: LoaderProps) => {
  let {color, size, large} = props;
  return <ActivityIndicator size={large ? 'large' : size} color={color} />;
};

Loader.defaultProps = {
  color: colors.primary,
};

Loader.propTypes = {
  color: propTypes.string,
  size: propTypes.string,
  large: propTypes.bool,
};

export default Loader;
