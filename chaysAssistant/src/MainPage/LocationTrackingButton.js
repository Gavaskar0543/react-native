import React from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
Geolocation.setRNConfiguration({ skipPermissionRequests: false });

const LocationTrackingButton = () => {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Permission granted, start location tracking
        Geolocation.watchPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // Send the location data to the backend server
            sendLocationDataToServer({ latitude, longitude });
           console.log(latitude,longitude);
          },
          (error) => {
            console.error(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={requestLocationPermission}>
        <Text>Start Location Tracking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationTrackingButton;
