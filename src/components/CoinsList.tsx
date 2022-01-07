import React from 'react'
import { StyleSheet, Text, FlatList, ActivityIndicator, Platform } from 'react-native'
import CoinsDetails from './CoinsDetails';

export default function CoinsList(props) 
{
    //console.log("props", props);
    const { coins, loadCoins } = props;

    const loadMore= () =>{
        console.log("Cargar mas monedas...");
        loadCoins();
    };

    return (
        <FlatList
            data={coins}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            keyExtractor={(coin) => String(coin.id)}
            renderItem={({item}) => <CoinsDetails coin={item}></CoinsDetails>}
            contentContainerStyle={styles.FlatListContentContainer}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                <ActivityIndicator
                    size="large"
                    style={styles.spinner}
                    color="blue"
                ></ActivityIndicator>
            }            
            ></FlatList>
    )
}

const styles = StyleSheet.create({
    FlatListContentContainer:{
        paddingHorizontal:5,
        marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner:{
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 90 : 80,
    }
})