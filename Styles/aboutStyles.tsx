import {StyleSheet} from 'react-native';
import colors from '../colors';

export const aboutUsStyles = StyleSheet.create({
  aboutTextStyle: {
    color: colors.white,
    alignSelf: 'center',
    textAlign: 'center',
  },
  aboutTextViewStyle: {
    padding: 10,
  },
  connectView: {
    marginBottom: 10,
  },
  connectText: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    color: colors.white,
  },
  contactConnectView: {
    height: 100,
    elevation: 1,
    width: '100%',
    justifyContent: 'center',
    padding: 20,
  },
  contactView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  facebookView: {
    height: 60,
    elevation: 0.5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  termsText: {
    marginLeft: 20,
    color: colors.white,
    textDecorationLine: 'underline',
  },
  legalView: {
    height: 'auto',
    elevation: 1,
    width: '100%',
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: colors.primary,
    height: '100%',
    width: '100%',
  },
  playStoreView: {
    height: 57,
    elevation: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  privacyText: {
    marginLeft: 20,
    marginTop: 10,
    color: colors.white,
    textDecorationLine: 'underline',
  },
  socialIcons: {
    height: 40,
    width: 40,
  },
  socialIconsText: {
    marginLeft: 20,
    color: colors.white,
    textDecorationLine: 'underline',
  },
  titleImage: {
    height: 150,
    width: 150,
  },
  titleImageView: {
    height: '25%',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextStyle: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.white,
  },
  titleViewStyle: {
    alignItems: 'center',
    marginBottom: 10,
  },
  twitterView: {
    height: 60,
    elevation: 0.5,
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  versionView: {
    alignItems: 'center',
    marginBottom: 10,
  },
});
