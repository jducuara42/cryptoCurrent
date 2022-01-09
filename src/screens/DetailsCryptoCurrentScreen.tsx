import React, { useState, useEffect }  from 'react'
import { SafeAreaView, Text, ScrollView } from 'react-native'
import { getDetailsCoin } from "../services/cryptoAPI"
import Header from '../components/Coin/Header';

export default function DetailsCryptoCurrentScreen(props) 
{
    //console.log(props);
    const {navigation, route: {params} } = props;
    //console.log(params.id)

    const [coin, setCoin] = useState(null);
    /*useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => <Icon name="arrow-left" color={"#fff"} size={20} style={{ marginLeft:20}} onPress={navigation.goBack}></Icon>
        })
    }, [navigation, params]);*/
    useEffect(() => {
        (async () => {
            try 
            {
                console.log("ID: ", params.id );
                const response = await getDetailsCoin(params.id);
                setCoin(response);
                //console.log("coin: ", coin);
                console.log("RESPONSE: ", response);
            } 
            catch (error) 
            {
                navigation.goBack();
            }
        })();
    }, [params]);

    if (!coin) return null;

    return (
        <ScrollView>
            <Header 
                name={coin[0].name} 
                image={coin[0].nameid} 
                symbol={coin[0].symbol}
                rank={coin[0].rank}
                nameid={coin[0].nameid}></Header>
        </ScrollView>
    )
}
