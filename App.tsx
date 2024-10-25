/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import colors from './colors';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {appStyles} from './Styles/appStyles';
import {NearbyScreen} from './Screens/nearbyScreen';
import {ProfileScreen} from './Screens/profileScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {About} from './Screens/about';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Using stack navigation as the main navigation
const Stack = createStackNavigator();

const MyStack = ({signOut}: {signOut: () => void}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        options={{
          headerStyle: {backgroundColor: colors.primary},
          headerTintColor: 'white',
        }}>
        {props => <About {...props} signOut={signOut} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
//creating tab navigation for each stack

const Tab = createBottomTabNavigator();
function tabIcon(route: any) {
  if (route.name === 'Nearby') {
    return (
      <Image
        style={appStyles.iconImageStyle}
        source={require('./assets/nearby.png')}
      />
    );
  } else if (route.name === 'Maps') {
    return (
      <Image
        style={appStyles.iconImageStyle}
        source={require('./assets/maps.png')}
      />
    );
  } else {
    return (
      <Image
        style={appStyles.iconImageStyle}
        source={require('./assets/user.png')}
      />
    );
  }
}

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({}) => {
          return tabIcon(route);
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: colors.secondary,
        tabBarInactiveBackgroundColor: colors.primary,
        headerShown: false,
      })}>
      <Tab.Screen name="Nearby" component={NearbyScreen} />
      {/* <Tab.Screen name="Maps" component={MapScreen} /> */}
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

//starting point for the app
function App(): JSX.Element {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState({});
  const [permissionsGranted, setPermissionsGranted] = useState<boolean>(false);
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]).then(result => {
        if (
          result['android.permission.ACCESS_COARSE_LOCATION'] &&
          result['android.permission.ACCESS_FINE_LOCATION'] === 'granted'
        ) {
          setPermissionsGranted(true);
        } else if (
          result['android.permission.ACCESS_COARSE_LOCATION'] ||
          result['android.permission.ACCESS_FINE_LOCATION'] ===
            'never_ask_again'
        ) {
          ToastAndroid.show(
            'Please Go into Settings -> Applications -> APP_NAME -> Permissions and Allow permissions to continue',
            ToastAndroid.LONG,
          );
        }
      });
    }
  }, []);
  if (permissionsGranted) {
    // Do something when permissions are granted
    console.log('Permissions granted!');
  }
  const checkIfLoggedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setloggedIn(isSignedIn ? true : false);
  };
  GoogleSignin.configure();
  checkIfLoggedIn();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setloggedIn(true);
      setuserInfo(user);
      getCurrentUser();
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
  async function getCurrentUser() {
    const currentUser = await GoogleSignin.getCurrentUser();
    console.log(currentUser);
    try {
      const jsonValue = JSON.stringify(currentUser);
      await AsyncStorage.setItem('userData', jsonValue);
    } catch (e) {
      console.log(e + 'storage');
    }
  }
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
      console.log(userInfo);
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
      <NavigationContainer>
        <MyStack signOut={signOut} />
      </NavigationContainer>
    );
  }
}

export default App;
