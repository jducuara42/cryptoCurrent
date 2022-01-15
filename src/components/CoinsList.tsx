import React, { useState } from 'react';
import { View, FlatList, TextInput, ActivityIndicator } from 'react-native';
import filter from 'lodash.filter';

//importe de componentes propios, componente detalle de monedas y estilos
import CoinsDetails from './CoinsDetails';
import { styles } from './styles';

export default function CoinsList(props: { coins: any; loadCoins: any; loadCoinsFilter: any; validateLoad: any; }) 
{
    //console.log("props", props);
    const [Data, setData] = useState([]);

    const { coins, loadCoins, loadCoinsFilter, validateLoad } = props;

    const handleSearch = (valor: string) => {
        let coinsFull;
        if(valor == "")
        {
            console.log("Cargar todas...", coinsFull);
            loadCoinsFilter("*");
        }
        else
        {
            coinsFull = coins;
            console.log("VALOR De: ", valor);
            const formattedQuery = valor.toLowerCase();
            //console.log("COINS: ", coins);

            const filteredData = filter(coins, coin => {
                return contains(coin, formattedQuery);
            });

            console.log("filteredData: ", filteredData);
            //coins = filteredData;
            //setCoinsFilter(filteredData);
            //setQuery(text);
            loadCoinsFilter(filteredData);
        }
    }; 

    const contains = ({ name, nameid, symbol }: any, query: string) => {
        //const { first, last } = name;
        
        //console.log("CONTAINS-name: ", name);
        //console.log("CONTAINS-nameid: ", nameid);

        if (name.includes(query) || nameid.includes(query) || symbol.includes(query)) 
        {
            return true;
        }
      
        return false;
      };

    const loadMore= () =>{
        console.log("Cargar mas monedas...");
        loadCoins();
    };

    const renderHeader = (props: any) => {
        //console.log("props-renderHeader: ", props);
        return (
            <View
                style={{
                backgroundColor: '#fff',
                padding: 10,
                marginVertical: 10,
                borderRadius: 20
                }}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    //value={query}
                    onChangeText={queryText => handleSearch(queryText)}
                    placeholder="Search"
                    style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
                />
            </View>
        );
    };

    const renderFooterLoader = () => {
        console.log("renderFooterLoader: ", validateLoad);
        return(
            <ActivityIndicator
                size="large"
                style={styles.spinner}
                color="blue"
            ></ActivityIndicator>
        );
    };

    //console.log("coinsFull: ", coinsFull);
    //console.log("coins: ", coins);

    return (
        <>
            <View
                style={{
                backgroundColor: '#fff',
                padding: 10,
                marginVertical: 10,
                borderRadius: 20
                }}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    onChangeText={queryText => handleSearch(queryText)}
                    placeholder="Search"
                    style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
                />
            </View>
            <FlatList
                data={coins}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(coin) => String(coin.id)}
                renderItem={({item}) => <CoinsDetails coin={item}></CoinsDetails>}
                contentContainerStyle={styles.FlatListContentContainer}
                onEndReached={validateLoad && loadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={validateLoad && renderFooterLoader}     
            ></FlatList>
        </>
    )
}