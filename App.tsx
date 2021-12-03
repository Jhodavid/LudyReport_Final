import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Text, View } from 'react-native'
import { AppComponent } from './src/components/AppComponent'
import { SplashScreen } from './src/navigator/SplashScreen';
import { HomeScreen } from './src/navigator/HomeScreen';

const Stack = createNativeStackNavigator();


export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <SplashScreen />
        <HomeScreen />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
