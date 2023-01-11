/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ChatComponent from './src';
import {
  ChatUserInterface,
  MessageInterface,
  UserInterface,
} from './src/interfaces';
import userDummyData from './src/constants/data.json';

const App = () => {
  const [userList] = useState(userDummyData as Array<UserInterface>);
  const [sendNewMessage, setSendNewMessage] = useState(false as any);

  const onMessageSend = (
    message: MessageInterface,
    otherUser: ChatUserInterface,
  ) => {
    sendReply(message.message, otherUser);
  };

  // For testing sending reply
  const sendReply = (message: string, user: ChatUserInterface) => {
    const newMessage: MessageInterface = {
      message: `This message reply of "${message}"`,
      user,
      id: Math.round(Math.random() * 10000),
    };
    setSendNewMessage(newMessage);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <NavigationContainer>
        <ChatComponent
          userList={userList}
          onMessageSend={onMessageSend}
          updateUserWithNewMessage={sendNewMessage}
        />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
