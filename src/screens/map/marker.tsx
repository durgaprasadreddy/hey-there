import * as React from 'react';
import MapboxGL from '@rnmapbox/maps';
import Avatar from '../../components/avatar';
import {UserInterface} from '../../interfaces';
import TextBox from '../../components/textBox';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import PopupView from '../../components/popup';
import SizedBox from '../../components/sizedBox';
import Button from '../../components/button';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface MarkerProps {
  user: UserInterface;
  hideName: boolean;
  gotoChat: Function;
}

const Marker = (props: MarkerProps) => {
  const [popupOpen, setPopupOpen] = React.useState(false);

  const showUserInfo = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const onGotoChat = () => {
    setPopupOpen(false);
    props.gotoChat(props.user);
  };

  return (
    <>
      <MapboxGL.MarkerView
        allowOverlap={true}
        coordinate={[props.user.lat, props.user.lng]}>
        <TouchableOpacity
          onPress={showUserInfo}
          activeOpacity={0.7}
          style={styles.marker}>
          <Avatar source={{uri: props.user.image}} />
          <View style={styles.nameView}>
            {props.hideName ? null : (
              <TextBox style={styles.username}>{props.user.name}</TextBox>
            )}
          </View>
        </TouchableOpacity>
      </MapboxGL.MarkerView>
      <PopupView visible={popupOpen} onRequestClose={closePopup}>
        <View>
          <View style={styles.avatarView}>
            <Avatar source={{uri: props.user.image}} />
            <SizedBox />
            <TextBox>{props.user.name}</TextBox>
          </View>
          <SizedBox />
          <View>
            <TextBox style={styles.location}>
              <TextBox style={styles.locationText}>Location:</TextBox>{' '}
              {props.user.lat}, {props.user.lng}
            </TextBox>
          </View>
          <SizedBox height={20} />
          <View style={styles.popupButtonView}>
            <Button onPress={onGotoChat} style={styles.chatButton}>
              <Ionicons name="chatbox-outline" size={16} />
              <SizedBox />
              <TextBox>Chat</TextBox>
            </Button>
          </View>
        </View>
      </PopupView>
    </>
  );
};

export default Marker;
