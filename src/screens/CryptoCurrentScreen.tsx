import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { getAllCoins, getDetailsCoin } from "../services/cryptoAPI"
import CoinsList from '../components/CoinsList';

export default function CryptoCurrentScreen() 
{
    const [coins, setCoins] = useState([]);
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
                console.log("COIN: ", coin.id);
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
            setCoins([...coins, ...coinsArray]);
        }
        catch(error)
        {
            console.error(error);
        }
    };

    return (
        <SafeAreaView>
            <CoinsList coins={coins} loadCoins={ loadCoins }></CoinsList>
        </SafeAreaView>
    )
}
