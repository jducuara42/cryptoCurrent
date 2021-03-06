import React, { useState, useEffect }  from 'react';
import { ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

//importe de componentes propios, consumo de APIs y componentes pantalla de detalles.
import { getDetailsCoin } from "../services/cryptoAPI";
import Header from '../components/Coin/Header';
import Statistics from '../components/Coin/Statistics';
import ExchangeForm from '../components/Exchange/ExchangeForm';

export default function DetailsCryptoCurrentScreen(props: { navigation: any; route: { params: any; }; }) 
{
    const {navigation, route: {params} } = props;
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => <Icon name="arrow-left" color={"#fff"} size={20} style={{ marginLeft:20}} onPress={navigation.goBack}></Icon>
        })
    }, [navigation, params]);

    useEffect(() => {
        (async () => {
            try 
            {
                const response = await getDetailsCoin(params.id);
                setCoin(response);
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
                nameid={coin[0].nameid}>
            </Header>
            <Statistics 
                price_usd={coin[0].price_usd} 
                percent_change_1h={coin[0].percent_change_1h}
                percent_change_24h={coin[0].percent_change_24h}
                percent_change_7d={coin[0].percent_change_7d}
                price_btc={coin[0].price_btc}></Statistics>
            <ExchangeForm
                symbol={coin[0].symbol}
                price_usd={coin[0].price_usd} 
            ></ExchangeForm>
        </ScrollView>
    )
}