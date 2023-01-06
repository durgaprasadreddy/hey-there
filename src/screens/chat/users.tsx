import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {UserInterface} from '../../interfaces';
import Avatar from '../../components/avatar';
import SizedBox from '../../components/sizedBox';
import TextBox from '../../components/textBox';
import {useData} from '../../context/dataContext';
import {RootStackParamList} from '../../navigation';
import styles from './style';

type UsersScreenProps = NativeStackScreenProps<RootStackParamList, 'Users'>;

const Users = (props: UsersScreenProps) => {
  const {userList = []} = useData();

  const gotoChat = (user: UserInterface) => {
    props.navigation.navigate('Chat', {user});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => gotoChat(item)}
              style={styles.userItem}>
              <Avatar size={50} source={{uri: item.image}} />
              <SizedBox />
              <TextBox style={styles.username}>{item.name}</TextBox>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Users;
