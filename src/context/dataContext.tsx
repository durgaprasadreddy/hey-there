import React, {createContext, useContext, useEffect, useState} from 'react';
import {ChatComponentProps} from '..';
import {MessageInterface, UserInterface} from '../interfaces';

export interface DataContextType extends ChatComponentProps {
  userList: Array<UserInterface>;
  newMessage: MessageInterface;
}

interface DataContextProps extends ChatComponentProps {
  children: React.ReactNode;
}

export const DataContext = createContext<DataContextType | null>(null);

const DataProvider = (props: DataContextProps) => {
  const [newMessage, setNewMessage] = useState(false as any);

  useEffect(() => {
    console.log('updateUserWithNewMessage', props.updateUserWithNewMessage);
    if (props.updateUserWithNewMessage) {
      setNewMessage(props.updateUserWithNewMessage);
    }
  }, [props.updateUserWithNewMessage]);

  return (
    <DataContext.Provider
      value={{
        userList: props.userList,
        onMessageSend: props.onMessageSend,
        updateUserWithNewMessage: props.updateUserWithNewMessage,
        newMessage,
      }}>
      {props.children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext) as DataContextType;

export default DataContext;
export {DataProvider, useData};
