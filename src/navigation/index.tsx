import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

//Importe de componente propio, stack inferior de navegacion
import ListadoNavigation from './ListadoNavigation';

const BottomTab = createBottomTabNavigator();

export default function index() 
{
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen 
                name="ListadoNavigation" 
                component={ListadoNavigation} options={{
                    tabBarLabel: "Criptomonedas",
                    tabBarIcon: ({ color, size}) => (
                        <Icon name="star" color={color} size={size}></Icon>
                    )
                }}
                ></BottomTab.Screen>
        </BottomTab.Navigator>
    )
}
