import {StyleSheet} from 'react-native';
import colors from '../colors';

export const appStyles = StyleSheet.create({
  iconImageStyle: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
  imageStyle: {
    height: 350,
    width: 'auto',
    resizeMode: 'contain',
  },
  signInButtonViewStyle: {
    alignItems: 'center',
    margin: 10,
  },
  statusBar: {
    backgroundColor: colors.primary,
  },
  welcomeTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcomeViewStyle: {
    margin: 10,
    alignItems: 'center',
  },
});
