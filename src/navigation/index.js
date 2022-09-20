import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeatherScreen from '../view/weatherScreen';
import SettingsScreen from '../view/settingsScreen';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="weatherScreen"
          component={WeatherScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="settingsScreen"
          component={SettingsScreen}
          options={{headerStyle: {backgroundColor: 'white'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
