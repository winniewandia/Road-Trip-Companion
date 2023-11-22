import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {profileStyles} from '../Styles/profileStyles';

export function ProfileScreen() {
  return (
    <SafeAreaView>
      <View style={profileStyles.profileContainer}>
        <View style={profileStyles.topContainer}>
          <View>
            <Text style={profileStyles.profileText}>Profile</Text>
          </View>
          <TouchableOpacity style={profileStyles.iconOpacity}>
            <Image
              source={require('../assets/setting-lines.png')}
              style={profileStyles.settingsIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={profileStyles.userView}>
          <View style={profileStyles.userIconView} />
          <View style={profileStyles.userTextView}>
            <Text style={profileStyles.userText}>Fullname</Text>
            <Text style={profileStyles.userText}>Email</Text>
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
        <TouchableOpacity style={profileStyles.newTripOpacity}>
          <Text style={profileStyles.newTripOpacityText}>Start New Trip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
