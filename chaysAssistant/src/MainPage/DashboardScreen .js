import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const handleSearchMonitoring = () => {
    // Navigate to the Search Monitoring screen
    navigation.navigate('location');
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Dashboard!</Text>
      <Text>This is where you can access app features.</Text>
      <Button
        title="Go to track"
        onPress={handleSearchMonitoring}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;
