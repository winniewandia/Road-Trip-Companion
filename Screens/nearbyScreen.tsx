import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {nearbyStyles} from '../Styles/nearbyStyles';
import colors from '../colors';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import axios from 'axios';
import Geocoder from 'react-native-geocoding';

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

navigator.geolocation = require('@react-native-community/geolocation');
// nearby screen functionality
export function NearbyScreen() {
  const [permissionsGranted, setPermissionsGranted] = useState<boolean>(false);
  const [longitude, setLongitude] = useState(36.817223);
  const [latitude, setLatitude] = useState(-1.286389);
  const [destinationLat, setDestinationLat] = useState(0);
  const [destinationLng, setDestinationLng] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [restaurantSelect, setRestaurantSelect] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);
  const [hotelSelect, setHotelSelect] = useState(false);
  const [hotelData, setHotelData] = useState([]);
  const [poiSelect, setPoiSelect] = useState(false);
  const [poiData, setPoiData] = useState([]);
  const [fuelSelect, setFuelSelect] = useState(false);
  const [fuelData, setFuelData] = useState([]);
  const apiKey = 'AIzaSyCSh5Tmo7Qognq3D_4pzMApV17DsxZYl3E';
  function searchRestaurants() {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=restaurant&key=AIzaSyCSh5Tmo7Qognq3D_4pzMApV17DsxZYl3E`,
      )
      .then(res => {
        console.log(res.data);
        setRestaurantData(res.data.results);
      })
      .catch(err => {
        console.log(err + 'hello');
      });
  }
  function searchHotels() {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=hotel&key=AIzaSyCSh5Tmo7Qognq3D_4pzMApV17DsxZYl3E`,
      )
      .then(res => {
        console.log(res.data);
        setHotelData(res.data.results);
      })
      .catch(err => {
        console.log(err + 'hello');
      });
  }
  function searchPoi() {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=point_of_interest&key=AIzaSyCSh5Tmo7Qognq3D_4pzMApV17DsxZYl3E`,
      )
      .then(res => {
        console.log(res.data);
        setPoiData(res.data.results);
      })
      .catch(err => {
        console.log(err + 'hello');
      });
  }
  function searchFuel() {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=fuel&key=AIzaSyCSh5Tmo7Qognq3D_4pzMApV17DsxZYl3E`,
      )
      .then(res => {
        console.log(res.data);
        setFuelData(res.data.results);
      })
      .catch(err => {
        console.log(err + 'hello');
      });
  }
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
  useEffect(() => {
    Geolocation.getCurrentPosition(
      pos => {
        const currentlongitude = pos.coords.longitude;
        const currentlatitude = pos.coords.latitude;
        setLongitude(currentlongitude);
        setLatitude(currentlatitude);
        console.log(pos.coords);
      },
      error => console.log('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: false, timeout: 5000, maximumAge: 1000},
    );
  }, []);
  Geocoder.init('AIzaSyCSh5Tmo7Qognq3D_4pzMApV17DsxZYl3E');

  if (permissionsGranted) {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={colors.primary} />
        <View style={nearbyStyles.mapView}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={nearbyStyles.map}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            showsUserLocation={true}
            showsMyLocationButton={false}>
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              title="Current Location"
            />
            {typeof destinationLat === 'number' && destinationLat !== 0 && (
              <Marker
                coordinate={{
                  latitude: destinationLat,
                  longitude: destinationLng,
                }}
                title="Selected Place"
              />
            )}
            {restaurantSelect &&
              restaurantData.map((restaurant: any) => (
                <Marker
                  key={restaurant.place_id}
                  coordinate={{
                    latitude: restaurant.geometry.location.lat,
                    longitude: restaurant.geometry.location.lng,
                  }}
                  title={restaurant.name}
                  pinColor={colors.secondary}
                />
              ))}
            {hotelSelect &&
              hotelData.map((hotel: any) => (
                <Marker
                  key={hotel.place_id}
                  coordinate={{
                    latitude: hotel.geometry.location.lat,
                    longitude: hotel.geometry.location.lng,
                  }}
                  title={hotel.name}
                  pinColor={colors.primary}
                />
              ))}
            {poiSelect &&
              poiData.map((poi: any) => (
                <Marker
                  key={poi.place_id}
                  coordinate={{
                    latitude: poi.geometry.location.lat,
                    longitude: poi.geometry.location.lng,
                  }}
                  title={poi.name}
                  pinColor="red"
                />
              ))}
            {fuelSelect &&
              fuelData.map((fuel: any) => (
                <Marker
                  key={fuel.place_id}
                  coordinate={{
                    latitude: fuel.geometry.location.lat,
                    longitude: fuel.geometry.location.lng,
                  }}
                  title={fuel.name}
                  pinColor="#bc6c25"
                />
              ))}
            <View>
              {typeof destinationLat === 'number' && destinationLat !== 0 && (
                <MapViewDirections
                  origin={{
                    latitude: latitude,
                    longitude: longitude,
                  }}
                  destination={{
                    latitude: destinationLat,
                    longitude: destinationLng,
                  }}
                  apikey={apiKey}
                  strokeWidth={3}
                  strokeColor={colors.secondary}
                  language="en"
                  mode="DRIVING"
                  optimizeWaypoints={true}
                  timePrecision="now"
                  onStart={params => {
                    console.log(
                      `Started routing between "${params.origin}" and "${
                        params.destination
                      }"${
                        params.waypoints.length
                          ? ' using waypoints: ' + params.waypoints.join(', ')
                          : ''
                      }`,
                    );
                  }}
                />
              )}
            </View>
          </MapView>
          <View style={nearbyStyles.textInputView}>
            <GooglePlacesAutocomplete
              placeholder="Search & Explore"
              query={{key: apiKey}}
              fetchDetails={true}
              onPress={(data, details) => {
                const latlng = {
                  latitude: latitude,
                  longitude: longitude,
                };
                if (details) {
                  setDestinationLat(details.geometry.location.lat);
                  setDestinationLng(details.geometry.location.lng);
                }
                const destLatlng = {
                  latitude: destinationLat,
                  longitude: destinationLng,
                };
                const origin = latlng;
                const destination = destLatlng;
                axios
                  .get(
                    `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`,
                  )
                  .then(res => {
                    console.log(res.data);
                  })
                  .catch(err => {
                    console.log(err + 'hello');
                  });
                console.log(data);
              }}
              onFail={error => console.log(error + 'onFail')}
              onNotFound={() => console.log('no results')}
              textInputProps={{
                placeholderTextColor: 'black',
                onChangeText: text => setUserInput(text),
                onSubmitEditing: () => {
                  Geocoder.from(userInput)
                    .then(json => {
                      var location = json.results[0].geometry.location;
                      console.log(location);
                      setDestinationLat(location.lat);
                      setDestinationLng(location.lng);
                      const latlng = {
                        latitude: latitude,
                        longitude: longitude,
                      };
                      const origin = latlng;
                      axios
                        .get(
                          `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${location}&key=${apiKey}`,
                        )
                        .then(res => {
                          console.log(res.data);
                        })
                        .catch(err => {
                          console.log(err + 'hello');
                        });
                    })
                    .catch(error => console.warn(error));
                  console.log('enter pressed');
                },
              }}
              styles={{
                textInput: {
                  color: 'black',
                },
                description: {
                  color: 'black',
                },
              }}
            />
          </View>
        </View>
        <View style={nearbyStyles.buttonTextView}>
          <View style={nearbyStyles.textViewStyle}>
            <Text style={nearbyStyles.textViewTime}>Good {getTime()}!</Text>
            <Text style={nearbyStyles.textViewLook}>
              What are you looking for?
            </Text>
          </View>
          <View>
            <View style={nearbyStyles.buttonsView}>
              <TouchableOpacity
                style={nearbyStyles.eachButtonView}
                onPress={() => {
                  searchRestaurants();
                  setRestaurantSelect(true);
                }}>
                <Image
                  source={require('../assets/restaurant.png')}
                  style={nearbyStyles.buttonIcons}
                />
                <Text style={nearbyStyles.textViewButton}>Dinning</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={nearbyStyles.eachButtonView}
                onPress={() => {
                  searchHotels();
                  setHotelSelect(true);
                }}>
                <Image
                  source={require('../assets/lodging.png')}
                  style={nearbyStyles.buttonIcons}
                />
                <Text style={nearbyStyles.textViewButton}>Accomodation</Text>
              </TouchableOpacity>
            </View>
            <View style={nearbyStyles.buttonsView}>
              <TouchableOpacity
                style={nearbyStyles.eachButtonView}
                onPress={() => {
                  searchPoi();
                  setPoiSelect(true);
                }}>
                <Image
                  source={require('../assets/eiffel-tower.png')}
                  style={nearbyStyles.buttonIcons}
                />
                <Text style={nearbyStyles.textViewButton}>Sights</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={nearbyStyles.eachButtonView}
                onPress={() => {
                  searchFuel();
                  setFuelSelect(true);
                }}>
                <Image
                  source={require('../assets/gas-station.png')}
                  style={nearbyStyles.buttonIcons}
                />
                <Text style={nearbyStyles.textViewButton}>Fuel</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View>
            <TouchableOpacity style={nearbyStyles.bottomButtonView}>
              <Image
                source={require('../assets/safari.png')}
                style={nearbyStyles.bottomButtonImage}
              />
              <Text style={nearbyStyles.bottomButtonText}>Start New Trip</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </SafeAreaView>
    );
  }
}
