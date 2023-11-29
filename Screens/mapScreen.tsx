// import React, {useEffect, useState} from 'react';
// import {PermissionsAndroid, Platform, ToastAndroid, View} from 'react-native';
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import axios from 'axios';
// import {mapStyles} from '../Styles/mapStyles';
// import Geolocation from '@react-native-community/geolocation';
// // import Geocoder from 'react-native-geocoding';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import MapViewDirections from 'react-native-maps-directions';
// import colors from '../colors';

// navigator.geolocation = require('@react-native-community/geolocation');
// export function MapScreen() {
//   const [permissionsGranted, setPermissionsGranted] = useState<boolean>(false);
//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       ]).then(result => {
//         if (
//           result['android.permission.ACCESS_COARSE_LOCATION'] &&
//           result['android.permission.ACCESS_FINE_LOCATION'] === 'granted'
//         ) {
//           setPermissionsGranted(true);
//           // this.setState({
//           //   permissionsGranted: true,
//           // });
//         } else if (
//           result['android.permission.ACCESS_COARSE_LOCATION'] ||
//           result['android.permission.ACCESS_FINE_LOCATION'] ===
//             'never_ask_again'
//         ) {
//           ToastAndroid.show(
//             'Please Go into Settings -> Applications -> APP_NAME -> Permissions and Allow permissions to continue',
//             ToastAndroid.LONG,
//           );
//         }
//       });
//     }
//   }, []);
//   useEffect(() => {
//     Geolocation.getCurrentPosition(
//       pos => {
//         const longitude = pos.coords.longitude;
//         const latitude = pos.coords.latitude;
//         setLongitude(longitude);
//         setLatitude(latitude);
//         console.log('logme');
//       },
//       error => console.log('GetCurrentPosition Error', JSON.stringify(error)),
//       {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000},
//     );
//   }, []);
//   const apiKey = 'AIzaSyCSh5Tmo7Qognq3D_4pzMApV17DsxZYl3E';
//   // Geocoder.init('AIzaSyCSh5Tmo7Qognq3D_4pzMApV17DsxZYl3E');

//   const [longitude, setLongitude] = useState(36.817223);
//   const [latitude, setLatitude] = useState(-1.286389);
//   const [destinationLat, setDestinationLat] = useState(0);
//   const [destinationLng, setDestinationLng] = useState(0);
//   // const [origin, setOrigin] = useState(0);
//   // const [destination, setDestination] = useState(0);
//   // const [region, destination] = useState(0);
//   if (permissionsGranted) {
//     return (
//       <View style={mapStyles.mapContainer}>
//         <MapView
//           provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//           style={mapStyles.map}
//           region={{
//             latitude: latitude,
//             longitude: longitude,
//             latitudeDelta: 0.015,
//             longitudeDelta: 0.0121,
//           }}
//           showsUserLocation={true}
//           showsMyLocationButton={false}
//           toolbarEnabled={true}
//           loadingEnabled={true}
//           loadingBackgroundColor={colors.primary}>
//           <Marker
//             coordinate={{
//               latitude: latitude,
//               longitude: longitude,
//             }}
//             title="Current Location"
//           />
//           <Marker
//             coordinate={{
//               latitude: destinationLat,
//               longitude: destinationLng,
//             }}
//             title="Selected Place"
//           />

//           <MapViewDirections
//             origin={{
//               latitude: latitude,
//               longitude: longitude,
//             }}
//             destination={{
//               latitude: destinationLat,
//               longitude: destinationLng,
//             }}
//             apikey={apiKey}
//             strokeWidth={3}
//             strokeColor={colors.secondary}
//             language="en"
//             mode="DRIVING"
//             optimizeWaypoints={true}
//             timePrecision="now"
//             onStart={params => {
//               console.log(
//                 `Started routing between "${params.origin}" and "${
//                   params.destination
//                 }"${
//                   params.waypoints.length
//                     ? ' using waypoints: ' + params.waypoints.join(', ')
//                     : ''
//                 }`,
//               );
//             }}
//           />
//         </MapView>
//         <View style={mapStyles.textInputView}>
//           <GooglePlacesAutocomplete
//             placeholder="Search & Explore"
//             query={{key: apiKey}}
//             fetchDetails={true}
//             onPress={(data, details) => {
//               const latlng = {
//                 latitude: latitude,
//                 longitude: longitude,
//               };
//               if (details) {
//                 setDestinationLat(details.geometry.location.lat);
//                 setDestinationLng(details.geometry.location.lng);
//               }
//               const destLatlng = {
//                 latitude: destinationLat,
//                 longitude: destinationLng,
//               };
//               const origin = latlng;
//               const destination = destLatlng;
//               axios
//                 .get(
//                   `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`,
//                 )
//                 .then(res => {
//                   console.log(res.data);
//                 })
//                 .catch(err => {
//                   console.log(err + 'hello');
//                 });
//               console.log(details);
//             }}
//             onFail={error => console.log(error)}
//             onNotFound={() => console.log('no results')}
//             currentLocation={true}
//             currentLocationLabel="Your location"
//           />
//         </View>
//         {/* <View style={mapStyles.directionView}>
//           {destinationLat && <Text>Here we go</Text>}
//         </View> */}
//         {/* <View style={mapStyles.textInputView}>
//           <TextInput
//             style={mapStyles.textInput}
//             placeholder="Search & Explore"
//             placeholderTextColor={'black'}
//             onSubmitEditing={event => {
//               Geocoder.from(event.nativeEvent.text)
//                 .then(json => {
//                   var location = json.results[0].geometry.location;
//                   console.log(location);
//                 })
//                 .catch(error => console.warn(error));
//             }}
//           />
//         </View> */}
//       </View>
//     );
//   }
// }
