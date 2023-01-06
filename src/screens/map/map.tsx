import * as React from 'react';
import styles from './style';
import MapboxGL from '@rnmapbox/maps';
import {UserInterface} from '../../interfaces';
import Marker from './marker';
import RangeFilter from './rangeFilter';
import {
  CURRENT_LOCATION,
  DEFAULT_RANGE,
  MAP_ACCESS_TOKEN,
  MAP_ZOOM,
} from '../../constants';
import {filterData} from '../../utils/data';

MapboxGL.setAccessToken(MAP_ACCESS_TOKEN);

interface MapProps {
  userList: Array<UserInterface>;
  navigation: {navigate: Function};
}

const Map = (props: MapProps) => {
  const [range, setRange] = React.useState(DEFAULT_RANGE);
  const [userList, setUserList] = React.useState(props.userList);
  const [hideName, setHideName] = React.useState(true);

  const cameraRef = React.useRef(null);
  const mapRef = React.useRef(null);
  const zoomTimeOutRef = React.useRef<number>(null);

  React.useEffect(() => {
    const data = filterData(props.userList, range);
    setUserList(data);
  }, [props.userList, range]);

  React.useEffect(() => {
    if (userList.length) {
      cameraRef.current?.zoomTo(MAP_ZOOM - range * 0.1);
    }
  }, [range, userList]);

  const onRegionDidChange = () => {
    zoomTimeOutRef.current && clearTimeout(zoomTimeOutRef.current);
    zoomTimeOutRef.current = setTimeout(async () => {
      const zoom = await mapRef.current?.getZoom();
      if (MAP_ZOOM + 1 < zoom) {
        setHideName(false);
      } else {
        setHideName(true);
      }
    }, 500);
  };

  const gotoChat = (user: UserInterface) => {
    props.navigation.navigate('Chat', {user});
  };
  return (
    <>
      <MapboxGL.MapView
        compassEnabled={true}
        compassFadeWhenNorth={true}
        surfaceView={true}
        onRegionDidChange={onRegionDidChange}
        ref={mapRef}
        style={styles.map}>
        <MapboxGL.Camera
          centerCoordinate={[CURRENT_LOCATION.lat, CURRENT_LOCATION.lng]}
          zoomLevel={11}
          ref={cameraRef}
        />
        {userList.map(user => (
          <Marker
            gotoChat={gotoChat}
            key={user.id}
            user={user}
            hideName={hideName}
          />
        ))}
      </MapboxGL.MapView>
      <RangeFilter range={range} onChange={setRange} />
    </>
  );
};

export default Map;
