import {Location} from '../interfaces';

export function generateLocation(
  latitude: number,
  longitude: number,
  max: number,
  min: number = 0,
) {
  if (min > max) {
    throw new Error(`min(${min}) cannot be greater than max(${max})`);
  }

  // earth radius in km
  const EARTH_RADIUS = 6371;

  // 1° latitude in meters
  const DEGREE = ((EARTH_RADIUS * 2 * Math.PI) / 360) * 1000;

  // random distance within [min-max] in km in a non-uniform way
  const maxKm = max * 1000;
  const minKm = min * 1000;
  const r = (maxKm - minKm + 1) * Math.random() ** 0.5 + minKm;

  // random angle
  const theta = Math.random() * 2 * Math.PI;

  const dy = r * Math.sin(theta);
  const dx = r * Math.cos(theta);

  let newLatitude = latitude + dy / DEGREE;
  let newLongitude = longitude + dx / (DEGREE * Math.cos(deg2rad(latitude)));

  const distance = getDistanceFromLatLonInKm(
    latitude,
    longitude,
    newLatitude,
    newLongitude,
  );

  return {
    newLatitude,
    newLongitude,
    distance: Math.round(distance),
  };
}

function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km

  return d;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

export const distance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) => {
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  let r = 6371;
  return c * r;
};

export function arePointsNear(
  checkPoint: Location,
  centerPoint: Location,
  range: number,
) {
  const distanceInKm = distance(
    checkPoint.lat,
    checkPoint.lng,
    centerPoint.lat,
    centerPoint.lng,
  );
  return Math.round(distanceInKm) <= range;
}
