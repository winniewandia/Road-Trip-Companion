import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyles} from '../Styles/mapStyles';

export function MapScreen() {
  return (
    <View style={mapStyles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={mapStyles.map}
        region={{
          latitude: -1.286389,
          longitude: 36.817223,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
}
