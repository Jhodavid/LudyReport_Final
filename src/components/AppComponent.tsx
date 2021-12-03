import React from 'react'
import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

import { SplashScreen } from '../navigator/SplashScreen';
import { LoginScreen } from '../navigator/LoginScreen';



export const AppComponent = () => {
    return (
        <>
            <SplashScreen />
            <LoginScreen />
        </>

    )
}
