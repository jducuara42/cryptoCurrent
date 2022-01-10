import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, Image, Platform } from 'react-native'
import { ENDPOINT_IMAGE_COINS } from "../../util/constants";
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function Header(props) 
{
    console.log("PROPS: ", props);
    const {name, nameid, symbol, rank} = props;
    let urlImageCoin: string = `${ENDPOINT_IMAGE_COINS}${nameid}.png`;
    const bgStyles = [{ backgroundColor: "grey", ...styles.background }]

    return (
        <>
            <View style={bgStyles} />
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

/*const styles =  StyleSheet.create({
    background: 
    {
        backgroundColor: "grey",
        height: 400,
        width: '100%',
        //position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }],
        
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
        height: 150,
        width: 100,
        resizeMode: Platform.OS === "android" ? "contain" : "contain",
    }
});
*/



const styles = StyleSheet.create({
    background: 
    {
        width: '100%',
        height: Platform.OS === "android" ? 220 : 230,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }],
    },
    content: 
    {
        marginHorizontal: 20,
        marginTop: 30
    },
    header: 
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50
    },
    name: 
    {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    order: 
    {
        color: 'white',
        alignItems: 'flex-end',
    },
    contentImage: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
    },
    image: 
    {
        width: 120,
        height: 100,
        resizeMode: "contain",
    },
  });