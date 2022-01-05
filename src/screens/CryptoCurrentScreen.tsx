import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getAllCoins } from "../services/cryptoAPI"

export default function CryptoCurrentScreen() 
{
    useEffect(() => {
        console.log("call loadCoins");
        (async () => {
            await loadCoins();
        })()
    }, []);

    const loadCoins = async () => {
        try
        {
            const response = await getAllCoins();
            console.log(response);
        }
        catch(error)
        {
            console.error(error);
        }
    };

    return (
        <SafeAreaView>
            <Text>Screen de listado de criptomonedas...</Text>
        </SafeAreaView>
    )
}
