import React from 'react';
import Chat from '../screens/chat';
import {UserInterface} from '../interfaces';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import MapScreen from '../screens/map';
import Users from '../screens/chat/users';
import Avatar from '../components/avatar';
import {View} from 'react-native';
import TextBox from '../components/textBox';
import SizedBox from '../components/sizedBox';
import styles from './style';

export type RootStackParamList = {
  Home: undefined;
  Chat: {user: UserInterface};
  Map: undefined;
  Users: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: 'Hey There'}}
      />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={props => ({
          headerTitle: () => {
            const {params = {}} = props.route;
            const {user = {}} = params;
            return (
              <View style={styles.chatHeader}>
                <Avatar source={{uri: user.image}} />
                <SizedBox />
                <TextBox>{user.name}</TextBox>
              </View>
            );
          },
        })}
      />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
