import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { SCREEN } from '../constants'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppNavigation from './appStack'

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {


    return (
        <>
            <NavigationContainer >
                <Navigator screenOptions={{ headerShown: false }}
                >
                    <Screen name={SCREEN.appStack} component={AppNavigation} />
                </Navigator>
            </NavigationContainer>

        </>
    )
}

export default Routes