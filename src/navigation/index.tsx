import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text } from 'react-native';
import { TabActions } from '@react-navigation/native';

import ListadoNavigation from './ListadoNavigation';
import CryptoCurrentScreen from '../screens/CryptoCurrentScreen';

const BottomTab = createBottomTabNavigator();

export default function index() 
{
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen 
                name="ListadoNavigation" 
                component={ListadoNavigation} options={{
                    tabBarLabel: "Listado de criptomonedad",
                    tabBarIcon: ({ color, size}) => (
                        <Icon name="star" color={color} size={size}></Icon>
                    )
                }}
                ></BottomTab.Screen>
        </BottomTab.Navigator>
    )
}
