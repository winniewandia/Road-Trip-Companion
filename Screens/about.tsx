import React from 'react';
import {Text, View, Image, Linking, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {aboutUsStyles} from '../Styles/aboutStyles';
import DeviceInfo from 'react-native-device-info';

export function About() {
  const version = DeviceInfo.getVersion();
  return (
    <SafeAreaView>
      <View style={aboutUsStyles.mainContainer}>
        <View style={aboutUsStyles.titleViewStyle}>
          <Text style={aboutUsStyles.titleTextStyle}>Roadtrip Companion</Text>
        </View>
        <View style={aboutUsStyles.titleImageView}>
          <Image
            style={aboutUsStyles.titleImage}
            source={require('../assets/safari.png')}
          />
        </View>
        <View style={aboutUsStyles.aboutTextViewStyle}>
          <Text style={aboutUsStyles.aboutTextStyle}>
            Your ultimate Road Trip Companion: Discover, Plan, and Explore
          </Text>
        </View>
        <View style={aboutUsStyles.versionView}>
          <Text style={aboutUsStyles.aboutTextStyle}>
            App Version: {version}
          </Text>
        </View>
        <View style={aboutUsStyles.contactConnectView}>
          <View style={aboutUsStyles.connectView}>
            <Text style={aboutUsStyles.connectText}>Connect with us </Text>
          </View>
          <View style={aboutUsStyles.contactView}>
            <Image
              style={aboutUsStyles.socialIcons}
              source={require('../assets/email.png')}
            />
            <View>
              <TouchableOpacity
                onPress={() => {
                  Linking.canOpenURL('https://nodemtech.com/contact/').then(
                    () => {
                      Linking.openURL('https://nodemtech.com/contact/');
                    },
                  );
                }}>
                <Text style={aboutUsStyles.socialIconsText}>Contact Us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={aboutUsStyles.facebookView}>
          <Image
            style={aboutUsStyles.socialIcons}
            source={require('../assets/facebook.png')}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                Linking.canOpenURL(
                  'https://www.facebook.com/Nodem-Technologies-635830313714599',
                ).then(() => {
                  Linking.openURL(
                    'https://www.facebook.com/Nodem-Technologies-635830313714599',
                  );
                });
              }}>
              <Text style={aboutUsStyles.socialIconsText}>
                Like us on Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={aboutUsStyles.twitterView}>
          <Image
            style={aboutUsStyles.socialIcons}
            source={require('../assets/twitter.png')}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                Linking.canOpenURL(
                  'https://twitter.com/NodemTechnolog1?s=09',
                ).then(() => {
                  Linking.openURL('https://twitter.com/NodemTechnolog1?s=09');
                });
              }}>
              <Text style={aboutUsStyles.socialIconsText}>
                Follow us on Twitter
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={aboutUsStyles.playStoreView}>
          <Image
            style={aboutUsStyles.socialIcons}
            source={require('../assets/google-play.png')}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                Linking.canOpenURL(
                  'https://play.google.com/store/apps/details?id=com.junkmobilecleaner',
                ).then(() => {
                  Linking.openURL(
                    'https://play.google.com/store/apps/details?id=com.junkmobilecleaner',
                  );
                });
              }}>
              <Text style={aboutUsStyles.socialIconsText}>
                Rate us on Play Store
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
        <View style={aboutUsStyles.legalView}>
          <View>
            <TouchableOpacity
              onPress={() => {
                Linking.canOpenURL(
                  'https://nodemtech.com/terms-conditions/',
                ).then(() => {
                  Linking.openURL('https://nodemtech.com/terms-conditions/');
                });
              }}>
              <Text style={aboutUsStyles.privacyText}>
                Terms and Conditions
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                Linking.canOpenURL(
                  'https://nodemtech.com/privacy-policy-2/',
                ).then(() => {
                  Linking.openURL('https://nodemtech.com/privacy-policy-2/');
                });
              }}>
              <Text style={aboutUsStyles.privacyText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
