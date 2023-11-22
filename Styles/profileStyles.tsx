import {StyleSheet} from 'react-native';
import colors from '../colors';

export const profileStyles = StyleSheet.create({
  iconOpacity: {
    // justifyContent: 'flex-end',
  },
  newTripOpacity: {
    backgroundColor: colors.secondary,
    elevation: 10,
    width: '70%',
    alignSelf: 'center',
    padding: 15,
    marginTop: 40,
    borderRadius: 30,
  },
  newTripOpacityText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 19,
  },
  profileContainer: {
    backgroundColor: colors.primary,
    height: '100%',
  },
  profileText: {
    color: 'white',
    fontSize: 20,
  },
  settingsIcon: {
    height: 25,
    width: 25,
    tintColor: 'white',
  },
  titleTripText: {
    color: 'white',
    fontSize: 25,
    paddingBottom: 5,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  tripIconImage: {
    height: 100,
    width: 100,
  },
  tripIconView: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    margin: 20,
  },
  tripText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  tripTextView: {
    alignItems: 'center',
    margin: 10,
  },
  userIconView: {
    backgroundColor: 'white',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  userText: {
    color: 'white',
    fontSize: 15,
    padding: 5,
  },
  userTextView: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  userView: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
  },
});
