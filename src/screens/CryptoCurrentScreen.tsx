import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';

//importe de componentes propios, consumo de APIs y componente pantalla de listado.
import { getAllCoins } from "../services/cryptoAPI";
import CoinsList from '../components/CoinsList';

//Funcion para la construccion de la pantalla de las monedas
export default function CryptoCurrentScreen() 
{
    const [coins, setCoins] = useState([]);
    const [coinsFull, setCoinsFull] = useState([]);
    const [validateLoad, setValidateLoad] = useState();

    useEffect(() => {
        (async () => {
            await loadCoins();
        })()
    }, []);

    //Funcion para consumir el API de monedas
    const loadCoins = async () => {
        try
        {
            const response = await getAllCoins();
            const coinsArray = [];

            for await ( const coin of response.data ) 
            {   
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
        }
        catch(error)
        {
            console.error(error);
        }
    };

    //Funcion para cargar las monedas filtradas
    const loadCoinsFilter = async (data) => {
        try
        {
            if(data){}
            if(data == "*")
            {
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
            throw(error);
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