import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {FlatList, TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/appStyles';
import {RootStackParamList} from '../../navigation';
import styles from './chat.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SizedBox from '../../components/sizedBox';
import TextBox from '../../components/textBox';
import Avatar from '../../components/avatar';
import {CURRENT_USER} from '../../constants';
import {MessageInterface} from '../../interfaces';
import {useData} from '../../context/dataContext';

type ChatScreenProps = NativeStackScreenProps<RootStackParamList, 'Chat'>;

const Chat = ({route}: ChatScreenProps) => {
  const {params = {}} = route;
  const {user = {}} = params;

  const [inputText, setInputText] = React.useState('');
  const [messages, setMessages] = React.useState(
    user.chats as Array<MessageInterface>,
  );

  const {onMessageSend, newMessage} = useData();

  React.useEffect(() => {
    if (newMessage && newMessage.id && newMessage.user.id === user.id) {
      const newMessages = [...messages];
      newMessages.push(newMessage);
      setMessages(newMessages);
    }
  }, [newMessage]);

  const onSendMessage = () => {
    const newMessages = [...messages];
    const message = {
      user: CURRENT_USER,
      id: Math.round(Math.random() * 1000),
      message: inputText.trim(),
    };
    newMessages.push(message);
    setMessages(newMessages);
    setInputText('');
    setTimeout(() => {
      onMessageSend(message, {...user, chats: undefined});
    }, 100);
  };

  const flatListRef = React.useRef<FlatList>(null);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {messages.length ? (
          <View style={{}}>
            <FlatList
              ref={flatListRef}
              onContentSizeChange={() =>
                flatListRef.current?.scrollToEnd({animated: false})
              }
              data={messages}
              keyExtractor={(item, index) => `${item.id}${index}`}
              renderItem={({item}) => {
                const isCurrentUser = item.user.id === CURRENT_USER.id;
                const messageUser = isCurrentUser ? CURRENT_USER : user;
                return (
                  <View
                    style={[
                      styles.messageView,
                      // eslint-disable-next-line react-native/no-inline-styles
                      {alignSelf: isCurrentUser ? 'flex-end' : 'flex-start'},
                    ]}>
                    <View
                      style={[
                        styles.userView,
                        // eslint-disable-next-line react-native/no-inline-styles
                        {alignSelf: isCurrentUser ? 'flex-end' : 'flex-start'},
                      ]}>
                      <Avatar source={{uri: messageUser.image}} size={20} />
                      <SizedBox />
                      <TextBox style={styles.username}>
                        {messageUser.name}
                      </TextBox>
                    </View>
                    <SizedBox height={5} />
                    <View
                      style={[
                        styles.messageTextView,
                        {
                          backgroundColor: isCurrentUser
                            ? colors.primary
                            : colors.borderGray,
                        },
                      ]}>
                      <TextBox
                        style={{
                          color: isCurrentUser ? colors.white : colors.black,
                        }}>
                        {item.message}
                      </TextBox>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        ) : (
          <View style={styles.emptyMessageView}>
            <TextBox>No messages yet...</TextBox>
          </View>
        )}
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Type here..."
          onChangeText={setInputText}
          value={inputText}
          style={styles.input}
          multiline
        />
        <SizedBox />
        <TouchableOpacity onPress={onSendMessage} disabled={!inputText.trim()}>
          <Ionicons
            name="send"
            color={inputText.trim() ? colors.primary : colors.gray}
            size={25}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;
