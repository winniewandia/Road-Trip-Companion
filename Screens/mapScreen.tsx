import React, {useState} from 'react';
import {Alert, View, TextInput} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyles} from '../Styles/mapStyles';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
// import Overlay from 'react-native-modal-overlay';

export function MapScreen() {
  Geolocation.getCurrentPosition(
    pos => {
      const longitude = pos.coords.longitude;
      const latitude = pos.coords.latitude;
      setLongitude(longitude);
      setLatitude(latitude);
    },
    error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
    {enableHighAccuracy: true},
  );
  Geocoder.init('AIzaSyCSh5Tmo7Qognq3D_4pzMApV17DsxZYl3E');
  Geocoder.from('Nairobi')
    .then(json => {
      var location = json.results[0].geometry.location;
      console.log(location);
    })
    .catch(error => console.warn(error));

  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  return (
    <View style={mapStyles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={mapStyles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}
      />
      <View style={mapStyles.textInputView}>
        <TextInput
          style={mapStyles.textInput}
          placeholder="Search & Explore"
          placeholderTextColor={'black'}
        />
      </View>
    </View>
  );
}
