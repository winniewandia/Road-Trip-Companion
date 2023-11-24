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
  textInput: {
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 1,
    height: 45,
  },
  textInputView: {
    position: 'absolute',
    top: 30,
    width: '95%',
  },
});
