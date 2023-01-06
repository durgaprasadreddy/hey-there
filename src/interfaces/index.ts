export interface UserInterface extends ChatUserInterface {
  chats: Array<MessageInterface>;
}

export interface ChatUserInterface {
  name: string;
  image: string;
  id: number;
  lat: number;
  lng: number;
}

export interface MessageInterface {
  user: ChatUserInterface;
  message: string;
  id: number;
}

export interface Location {
  lat: number;
  lng: number;
}
