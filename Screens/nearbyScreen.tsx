import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {nearbyStyles} from '../Styles/nearbyStyles';
import colors from '../colors';

function getTime() {
  let timeOfDay = '';
  let date = new Date();
  let hours = date.getHours();

  if (hours > 0 && hours < 12) {
    timeOfDay = 'Morning';
  } else if (hours > 11 && hours < 17) {
    timeOfDay = 'Afternoon';
  } else {
    timeOfDay = 'Evening';
  }
  return `${timeOfDay}`;
}

export function NearbyScreen() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primary} />
      <View style={nearbyStyles.mapView} />
      <View style={nearbyStyles.buttonTextView}>
        <View style={nearbyStyles.textViewStyle}>
          <Text style={nearbyStyles.textViewTime}>Good {getTime()}!</Text>
          <Text style={nearbyStyles.textViewLook}>
            What are you looking for?
          </Text>
        </View>
        <View>
          <View style={nearbyStyles.buttonsView}>
            <View style={nearbyStyles.eachButtonView}>
              <Image
                source={require('../assets/restaurant.png')}
                style={nearbyStyles.buttonIcons}
              />
              <Text style={nearbyStyles.textViewButton}>Dinning</Text>
            </View>
            <View style={nearbyStyles.eachButtonView}>
              <Image
                source={require('../assets/lodging.png')}
                style={nearbyStyles.buttonIcons}
              />
              <Text style={nearbyStyles.textViewButton}>Accomodation</Text>
            </View>
          </View>
          <View style={nearbyStyles.buttonsView}>
            <View style={nearbyStyles.eachButtonView}>
              <Image
                source={require('../assets/eiffel-tower.png')}
                style={nearbyStyles.buttonIcons}
              />
              <Text style={nearbyStyles.textViewButton}>Sights</Text>
            </View>
            <View style={nearbyStyles.eachButtonView}>
              <Image
                source={require('../assets/gas-station.png')}
                style={nearbyStyles.buttonIcons}
              />
              <Text style={nearbyStyles.textViewButton}>Fuel</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={nearbyStyles.bottomButtonView}>
            <Image
              source={require('../assets/safari.png')}
              style={nearbyStyles.bottomButtonImage}
            />
            <Text style={nearbyStyles.bottomButtonText}>Start New Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}