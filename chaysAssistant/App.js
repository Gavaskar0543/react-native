import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// ...

import DashboardScreen from './src/MainPage/DashboardScreen ';
import LocationTrackingButton from './src/MainPage/LocationTrackingButton';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
    
       <Stack.Screen name='Dashboard' component={DashboardScreen}/>
       <Stack.Screen name='location' component={LocationTrackingButton}/>
    

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
