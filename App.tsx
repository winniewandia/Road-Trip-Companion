/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import colors from './colors';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {appStyles} from './Styles/appStyles';

function App(): JSX.Element {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState({});
  const checkIfLoggedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setloggedIn(isSignedIn ? true : false);
  };
  GoogleSignin.configure();
  checkIfLoggedIn();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      // const {accessToken, idToken} = await GoogleSignin.signIn();
      const user = await GoogleSignin.signIn();
      setloggedIn(true);
      setuserInfo(user);
      console.log(userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Alert.alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        Alert.alert('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        Alert.alert('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };
  if (!loggedIn) {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={colors.primary} />
        <View>
          <Image
            style={appStyles.imageStyle}
            source={require('./assets/safari.png')}
          />
        </View>
        <View style={appStyles.welcomeViewStyle}>
          <Text style={appStyles.welcomeTextStyle}>
            Welcome to Road Trip Companion
          </Text>
          <Text>Please Sign in to continue</Text>
        </View>
        <View style={appStyles.signInButtonViewStyle}>
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
            // disabled={this.state.isSigninInProgress}
          />
        </View>
        <View>
          {loggedIn && <Button onPress={signOut} title="LogOut" color="red" />}
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <ScrollView>
        <Text>Next</Text>
      </ScrollView>
    );
  }
}

export default App;
