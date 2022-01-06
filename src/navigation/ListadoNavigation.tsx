import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native'
import CryptoCurrentScreen from '../screens/CryptoCurrentScreen';
import DetailsCryptoCurrentScreen from '../screens/DetailsCryptoCurrentScreen';

import { StackActions } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function ListadoNavigation()
{
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="CryptoCurrentScreen" 
                component={CryptoCurrentScreen} 
                options={{ title: "Listado de criptomonedas", headerTransparent:false}}></Stack.Screen>
            <Stack.Screen 
                name="DetailsCryptoCurrentScreen" 
                component={DetailsCryptoCurrentScreen} 
                options={{ title: "Detalle de criptomoneda"}}></Stack.Screen>
        </Stack.Navigator>
    )
}
