import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native'
import { ENDPOINT_IMAGE_COINS } from "../../util/constants";
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header(props) 
{
    console.log("PROPS: ", props);
    const {name, nameid, symbol, rank} = props;
    let urlImageCoin: string = `${ENDPOINT_IMAGE_COINS}${nameid}.png`;
    const backgroudStyles = [{ backgroundColor: "grey", ...styles.backgroundStyle}];

    return (
        <>
            <View style={backgroudStyles}></View>
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.order}>#{`${rank}`.padStart(4,0)}</Text>
                </View>
                <View style={styles.contentImage}>
                    <Image source={{ uri: urlImageCoin }} style={styles.image} ></Image>
                </View>
                
            </SafeAreaView>
        </>
    )
}


const styles =  StyleSheet.create({
    backgroundStyle: 
    {
        width: "100%",
        height: 700,
        position: "absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }]
    },
    content:
    {
        marginHorizontal: 20,
        marginTop: 30,
    },
    header:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
    },
    name:
    {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 27,
    },
    order:
    {
        color: "#fff",
        fontWeight: "bold",
    },
    contentImage:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 30,
    },
    image: 
    {
        height: 250,
        width: 500,
        resizeMode: "contain",
    }
});