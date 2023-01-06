import * as React from 'react';
import {DataProvider} from './context/dataContext';
import RootNavigation from './navigation';
import {ChatUserInterface, MessageInterface, UserInterface} from './interfaces';

export interface ChatComponentProps {
  userList: Array<UserInterface>;
  onMessageSend: (
    message: MessageInterface,
    otherUser: ChatUserInterface,
  ) => void;
  updateUserWithNewMessage: MessageInterface;
}

const Component = () => {
  return <RootNavigation />;
};

const ChatComponent = (props: ChatComponentProps) => {
  return (
    <DataProvider {...props}>
      <Component />
    </DataProvider>
  );
};

export default ChatComponent;
