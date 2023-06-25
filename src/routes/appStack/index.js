import React, { useRef } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as App from '../../screens/App'
import { SCREEN } from '../../constants';

const { Navigator, Screen } = createNativeStackNavigator();



const AppNavigation = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={SCREEN.clientHome}
        >
            <Screen name={SCREEN.clientHome} component={App.Home} />

        </Navigator>
    );
};
export default AppNavigation


