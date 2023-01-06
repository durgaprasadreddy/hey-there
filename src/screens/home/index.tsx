import * as React from 'react';
import {View} from 'react-native';
import Button from '../../components/button';
import SizedBox from '../../components/sizedBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextBox from '../../components/textBox';
import styles from './style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
// import {generateData} from '../../utils/data';
// import {UserInterface} from '../../interfaces';
// import {CURRENT_LOCATION} from '../../constants';
import userDummyData from '../../constants/data.json';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: React.FC<HomeScreenProps> = props => {
  // const [userList, setUserList] = React.useState(
  //   userDummyData as Array<UserInterface>,
  // );

  React.useEffect(() => {
    // Generates Dummy Data from here
    // const data = generateData(CURRENT_LOCATION, 11, 140);
    // console.log(JSON.stringify(data));
    // setUserList(data);
  }, []);

  const gotoMapScreen = () => {
    console.log('userDummyData', userDummyData);
    props.navigation.navigate('Map');
  };

  const gotoChatScreen = () => {
    props.navigation.navigate('Users');
  };

  return (
    <View style={styles.container}>
      <Button onPress={gotoChatScreen}>
        <Ionicons name="chatbox-outline" size={18} />
        <SizedBox />
        <TextBox>Chat Screen</TextBox>
      </Button>
      <SizedBox height={20} />
      <Button onPress={gotoMapScreen}>
        <Ionicons name="map-outline" size={18} />
        <SizedBox />
        <TextBox>Map Screen</TextBox>
      </Button>
    </View>
  );
};

export default Home;
