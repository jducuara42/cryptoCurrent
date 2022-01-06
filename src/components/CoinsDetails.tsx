import React from 'react'
import { StyleSheet, View, Text, Image,  TouchableWithoutFeedback } from 'react-native'
import { ENDPOINT_IMAGE_COINS } from "../util/constants";

export default function CoinsDetails(props) 
{
    console.log("props::", props);
    const { coin } = props;
    let urlImageCoin: string = `${ENDPOINT_IMAGE_COINS}${coin.nameid}.png`;
    console.log("urlImageCoin::", urlImageCoin);

    const goToCoin = () => {
        console.log("Dio tap a la moneda: ", coin.name);
    };

    return (
        <TouchableWithoutFeedback onPress={goToCoin}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.backgroundStyles}>
                        <Text style={styles.name}>{coin.name}</Text>
                        <Text style={styles.number}>ID: {`${coin.id}`.padStart(4,0)}</Text>
                        <Text style={styles.number}>Ranking: {`${coin.rank}`.padStart(4,0)}</Text>
                        <Image 
                            source={{uri: urlImageCoin}} 
                            style={styles.image} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 80,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    image: {
        position: "absolute",
        bottom: 5,
        right: 5,
        width: 60,
        height: 60,
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10,
    },
    number:{
        position: "relative",
        top: 1,
        left: 1,
        color: "#fff",
        fontSize: 11,
    },
    backgroundStyles: {
        flex:1,
        borderRadius: 15,
        padding: 10,
        backgroundColor: "grey",
    }
})