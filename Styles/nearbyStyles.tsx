import {StyleSheet} from 'react-native';
import colors from '../colors';

export const nearbyStyles = StyleSheet.create({
  autocompleteStyles: {
    color: 'black',
  },
  bottomButtonImage: {
    height: 25,
    width: 25,
    paddingTop: 10,
    // tintColor: 'white',
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  bottomButtonView: {
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    elevation: 8,
    borderRadius: 15,
    width: '50%',
    padding: 8,
    margin: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonIcons: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
  buttonsView: {
    // display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    margin: 20,
  },
  buttonTextView: {
    backgroundColor: colors.primary,
    height: 700,
  },
  eachButtonView: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapView: {
    // ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 'auto',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  textViewStyle: {
    height: 50,
    margin: 20,
    alignItems: 'center',
  },
  textViewLook: {
    color: 'white',
    fontSize: 20,
  },
  textViewTime: {
    color: 'white',
    fontSize: 30,
  },
  textViewButton: {
    color: 'white',
  },
});
