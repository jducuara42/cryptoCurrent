import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput } from 'react-native';
import { getAllCoins, getDetailsCoin } from "../services/cryptoAPI"
import CoinsList from '../components/CoinsList';
//import {CoinsList} from "../components/CoinsList";

export default function CryptoCurrentScreen() 
{
    const [coins, setCoins] = useState([]);
    const [coinsFull, setCoinsFull] = useState([]);
    const [validateLoad, setValidateLoad] = useState();
    //console.log("COINS: ", coins);

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
            //console.log(response);

            const coinsArray = [];
            for await ( const coin of response.data ) 
            {
                console.log("COIN: ", coin.name);
                //const coinDetails = await getDetailsCoin(coin.id);
                //console.log("Details: ", coinDetails);
                
                coinsArray.push({
                    id: coin.id,
                    name: coin.name,
                    nameid: coin.nameid,
                    rank: coin.rank,
                    symbol: coin.symbol,
                });
            
            }
            
            setValidateLoad(true);
            setCoins([...coins, ...coinsArray]);
            setCoinsFull([...coinsFull, ...coinsArray]);
            console.log("-------COINS: ", ...coins);
        }
        catch(error)
        {
            console.error(error);
        }
    };

    const loadCoinsFilter = async (data) => {
        console.log("=== DATA: ", data);
        try
        {
            if(data)
            {
                
            }
            if(data == "*")
            {
                console.log("cargar todo...", coinsFull);
                setValidateLoad(true);
                setCoins(coinsFull);
            }
            else
            {
                setValidateLoad(false);
                setCoins(data);
            }
        }
        catch(error)
        {
            console.error(error);
        }
    };

    return (
        <SafeAreaView>
            <CoinsList 
                coins={coins} 
                loadCoins={ loadCoins } 
                loadCoinsFilter={ loadCoinsFilter } 
                validateLoad={ validateLoad }></CoinsList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: 
    {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
  });
  