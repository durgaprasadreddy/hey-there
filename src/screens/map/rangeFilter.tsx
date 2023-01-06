import * as React from 'react';
import {View} from 'react-native';
import styles from './style';
import {Slider} from '@miblanchard/react-native-slider';
import TextBox from '../../components/textBox';
import {MAX_RANGE, MIN_RANGE} from '../../constants';

interface RangeFilterProps {
  range: number;
  onChange: Function;
}

const RangeFilter = (props: RangeFilterProps) => {
  const onValueChange = (val: any) => {
    props.onChange(Math.round(Number(val)));
  };
  return (
    <View style={styles.rangeFilter}>
      <Slider
        minimumValue={MIN_RANGE}
        maximumValue={MAX_RANGE}
        value={props.range}
        onValueChange={onValueChange}
        containerStyle={styles.sliderContainer}
      />
      <TextBox>{props.range} KM</TextBox>
    </View>
  );
};

export default RangeFilter;
