import Jabber from 'jabber';
import {makeFirstLetterCapital} from '.';
import {CURRENT_LOCATION} from '../constants';
import {Location, UserInterface} from '../interfaces';
import {arePointsNear, generateLocation} from './location';

export const generateData = (
  currentLocation: Location,
  radius: number = 1,
  count: number = 50,
) => {
  const data: Array<UserInterface> = [];

  for (let i = 1; i <= count; i++) {
    const name = generateUserName();
    const location = generateLocation(
      currentLocation.lng,
      currentLocation.lat,
      radius,
      0.1,
    );
    const lng = location.newLatitude;
    const lat = location.newLongitude;
    data.push({
      name,
      lat,
      lng,
      image: `https://i.pravatar.cc/150?img=${i > 70 ? i - 70 : i}`,
      id: i,
      chats: [],
    });
  }
  return data;
};

const generateUserName = () => {
  const jabber = new Jabber();
  return makeFirstLetterCapital(jabber.createWord(5));
};

export const filterData = (allData: Array<UserInterface>, range: number) => {
  const newData: Array<UserInterface> = allData.filter(u =>
    arePointsNear({lat: u.lat, lng: u.lng}, CURRENT_LOCATION, range),
  );

  return newData;
};
