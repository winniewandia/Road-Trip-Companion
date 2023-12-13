import 'react-native-gesture-handler';
import React, {useCallback, useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {profileStyles} from '../Styles/profileStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

//profile screen implementation
export function ProfileScreen({navigation}: any) {
  type UserData = {
    idToken: null | string;
    scopes: string[];
    serverAuthCode: null | string;
    user: {
      email: string;
      familyName: string;
      givenName: string;
      id: string;
      name: string;
      photo: string;
    };
  };

  const [userInfo, setUserInfo] = useState({} as UserData);
  const getData = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userData');
      if (jsonValue !== null) {
        setUserInfo(JSON.parse(jsonValue) as UserData);
      }
    } catch (e) {
      console.log(e + 'read');
    }
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <SafeAreaView>
      <View style={profileStyles.profileContainer}>
        <View style={profileStyles.topContainer}>
          <View>
            <Text style={profileStyles.profileText}>Profile</Text>
          </View>
          <TouchableOpacity
            style={profileStyles.iconOpacity}
            onPress={() => navigation.navigate('About')}>
            <Image
              source={require('../assets/setting-lines.png')}
              style={profileStyles.settingsIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={profileStyles.userView}>
          <View style={profileStyles.userIconView}>
            {userInfo?.user?.photo && (
              <Image
                source={{
                  uri: userInfo.user.photo,
                }}
                style={profileStyles.userIconView}
              />
            )}
          </View>
          <View style={profileStyles.userTextView}>
            {userInfo?.user?.name && (
              <Text style={profileStyles.userText}>{userInfo.user.name}</Text>
            )}
            {userInfo?.user?.email && (
              <Text style={profileStyles.userText}>{userInfo.user.email}</Text>
            )}
          </View>
        </View>
        <View style={profileStyles.tripIconView}>
          <Image
            source={require('../assets/user-icon.png')}
            style={profileStyles.tripIconImage}
          />
        </View>
        <View style={profileStyles.tripTextView}>
          <Text style={profileStyles.titleTripText}>Trips</Text>
          <Text style={profileStyles.tripText}>
            Each trip you create is stored here, ready for your next adventure
          </Text>
        </View>
        {/* <TouchableOpacity style={profileStyles.newTripOpacity}>
          <Text style={profileStyles.newTripOpacityText}>Start New Trip</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
