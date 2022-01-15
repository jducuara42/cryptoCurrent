import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

//Importe de componentes propios, pantallas de listado y detalle de moneda
import CryptoCurrentScreen from '../screens/CryptoCurrentScreen';
import DetailsCryptoCurrentScreen from '../screens/DetailsCryptoCurrentScreen';

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
                options={{ title: "", headerTransparent:true}}></Stack.Screen>
        </Stack.Navigator>
    )
}
