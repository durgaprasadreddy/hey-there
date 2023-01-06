import {ChatUserInterface} from '../interfaces';

export const CURRENT_LOCATION = {
  lng: 40.6971494,
  lat: -74.2598671,
};

export const MAP_ACCESS_TOKEN =
  'pk.eyJ1Ijoia3Jpc2hhbnNhaW5pIiwiYSI6ImNsY2l5ZXBnOTEzNGUzdnF1YTdwZ3R1c3oifQ.819mlbDPXDABT1gTW1PXbQ';

export const CURRENT_USER: ChatUserInterface = {
  name: 'Durga',
  image: 'https://i.pravatar.cc/150?img=10',
  id: 3434,
  ...CURRENT_LOCATION,
};

export const DEFAULT_RANGE = 1; // KM
export const MIN_RANGE = 1; // KM
export const MAX_RANGE = 10; // KM
export const MAP_ZOOM = 11;
