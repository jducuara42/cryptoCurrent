import React, { useState } from 'react';
import { View, FlatList, TextInput, ActivityIndicator } from 'react-native';
import filter from 'lodash.filter';

//importe de componentes propios, componente detalle de monedas y estilos
import CoinsDetails from './CoinsDetails';
import { styles } from './styles';

//Funcion para construir el listado de monedas
export default function CoinsList(props: { coins: any; loadCoins: any; loadCoinsFilter: any; validateLoad: any; }) 
{
    const [Data, setData] = useState([]);
    const { coins, loadCoins, loadCoinsFilter, validateLoad } = props;

    //Funcion de buscado de monedas
    const handleSearch = (valor: string) => {
        let coinsFull;
        if(valor == "")
        {
            loadCoinsFilter("*");
        }
        else
        {
            coinsFull = coins;
            const formattedQuery = valor.toLowerCase();

            const filteredData = filter(coins, coin => {
                return contains(coin, formattedQuery);
            });
            loadCoinsFilter(filteredData);
        }
    }; 

    //Funcion para la busqueda en los diferentes campos
    const contains = ({ name, nameid, symbol }: any, query: string) => {

        if (name.includes(query) || nameid.includes(query) || symbol.includes(query)) 
        {
            return true;
        }
      
        return false;
      };

    const loadMore= () =>{
        loadCoins();
    };

    //Funcion para construir la cabecera de la lista
    const renderHeader = (props: any) => {
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

    //Funcion para construir el footer de la lista
    const renderFooterLoader = () => {
        return(
            <ActivityIndicator
                size="large"
                style={styles.spinner}
                color="blue"
            ></ActivityIndicator>
        );
    };

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
                    testID="txtSearchCoin"
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
                testID="flatListCoins"     
            ></FlatList>
        </>
    )
}