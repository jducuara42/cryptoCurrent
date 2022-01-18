import React from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';

//importe de componente propio, constante de imagenes y estilos
import { ENDPOINT_IMAGE_COINS } from "../../util/constants";
import { styles } from './styles'; 

//Funcion para construccion de componente header del detalle de la moneda.
export default function Header(props: { name:string; nameid:string; symbol:string; rank:string; }) 
{
    const {name, nameid, symbol, rank} = props;
    let urlImageCoin: string = `${ENDPOINT_IMAGE_COINS}${nameid}.png`;

    return (
        <>
            <View style={styles.background} />
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.order}>Simbolo: {`${symbol}`}</Text>
                    <Text style={styles.order}>Ranking: #{`${rank}`.padStart(3,0)}</Text>
                </View>
                <View style={styles.contentImage}>
                    <Image source={{ uri: urlImageCoin }} style={styles.image} ></Image>
                </View>
            </SafeAreaView>
        </>
    )
}