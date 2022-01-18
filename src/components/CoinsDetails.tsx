import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Platform } from 'react-native';
import { useNavigation } from "@react-navigation/native";

//importe de componente propio, constante de imagenes y estilos
import { ENDPOINT_IMAGE_COINS } from "../util/constants";
import { stylesDetails } from './styles';

//Funcion para mostrar las monedas
export default function CoinsDetails(props: { coin: any; }) 
{
    const { coin } = props;
    let urlImageCoin: string = `${ENDPOINT_IMAGE_COINS}${coin.nameid}.png`;
    const navigation = useNavigation();

    //Funcion para ir a la moneda seleccionada
    const goToCoin = () => {
        navigation.navigate("DetailsCryptoCurrentScreen", {id: coin.id});
    };

    return (
        <TouchableWithoutFeedback onPress={goToCoin}>
            <View style={stylesDetails.card}>
                <View style={stylesDetails.spacing}>
                    <View style={stylesDetails.backgroundStyles}>
                        <Text style={stylesDetails.name}>{coin.name}</Text>
                        <Text style={stylesDetails.number}>ID: {`${coin.id}`.padStart(4,0)}</Text>
                        <Text style={stylesDetails.number}>Ranking: {`${coin.rank}`.padStart(4,0)}</Text>
                        <Image 
                            source={{uri: urlImageCoin}} 
                            style={stylesDetails.image} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}