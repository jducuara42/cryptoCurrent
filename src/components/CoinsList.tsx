import React from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'
import CoinsDetails from './CoinsDetails';

export default function CoinsList(props) 
{
    //console.log("props", props);
    const { coins } = props;

    return (
        <FlatList
            data={coins}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(coin) => String(coin.id)}
            renderItem={({item}) => <CoinsDetails coin={item}></CoinsDetails>}
            contentContainerStyle={styles.FlatListContentContainer}
            ></FlatList>
    )
}

const styles = StyleSheet.create({
    FlatListContentContainer:{
        paddingHorizontal:5,
        //marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner:{
        marginTop: 20,
        //marginBottom: Platform.OS === "android" ? 90 : 80,
    }
})