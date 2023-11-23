import {StyleSheet} from 'react-native';
// import colors from '../colors';

export const mapStyles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
