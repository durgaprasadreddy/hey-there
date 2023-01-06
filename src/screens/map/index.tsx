import * as React from 'react';
import {View} from 'react-native';
import styles from './style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import Map from './map';
import {useData} from '../../context/dataContext';

type MapScreenProps = NativeStackScreenProps<RootStackParamList, 'Map'>;

const MapScreen = (props: MapScreenProps) => {
  const {userList} = useData();
  return (
    <View style={styles.container}>
      <Map userList={userList} navigation={props.navigation} />
    </View>
  );
};

export default MapScreen;
