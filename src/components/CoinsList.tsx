import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, ActivityIndicator, Platform } from 'react-native'
import CoinsDetails from './CoinsDetails';
import { ListItem, SearchBar } from "react-native-elements";
import { useFormik } from "formik";
import * as Yup from "yup";
import filter from 'lodash.filter';


export default function CoinsList(props) 
{
    console.log("props", props.validateLoad);
    const [Data, setData] = useState([]);

    const { coins, loadCoins, loadCoinsFilter, validateLoad } = props;

    const handleSearch = (valor) => {
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
            formik.setFieldValue("search", valor);
            const formattedQuery = valor.toLowerCase();
            //console.log("COINS: ", coins);

            const filteredData = filter(coins, coin => {
                return contains(coin, formattedQuery);
            });

            console.log("filteredData: ", filteredData);
            loadCoinsFilter(filteredData);
        }
    }; 

    const contains = ({ name, nameid, symbol }, query) => {
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
        /*if(validateLoadMore)
        {
            console.log("--Cargar mas monedas...");
            loadCoins();
        }
        else
        {
            console.log("NO cargar mas monedas...");
        }*/
        console.log("loadMore: ", validateLoad);
        loadCoins();
    };

    const loadFilter= () =>{
        console.log("Cargar mas monedas...");
        loadCoins();
    };

    const renderHeader = (props) => {
        console.log("props-renderHeader: ", props);
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
                    value={formik.values.search}
                    onChangeText={queryText => handleSearch(queryText)}
                    placeholder="Search"
                    style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
                    enablesReturnKeyAutomatically
                />
            </View>
        );
    };

    const renderFooterLoader = () => {
        /*if(validateLoadMore)
        {
            console.log("Cargar loader...");
            return(
                <ActivityIndicator
                    size="large"
                    style={styles.spinner}
                    color="blue"
                ></ActivityIndicator>
            );
        }
        else
        {
            console.log("NO mostrar loader...");
            return(null);
        }*/
        console.log("renderFooterLoader: ", validateLoad);
        return(
            <ActivityIndicator
                size="large"
                style={styles.spinner}
                color="blue"
            ></ActivityIndicator>
        );
    };

    const formik = useFormik({
        initialValues: initialValues(),
        onSubmit: (formValue) => {
            console.log("Formulario enviado");
        },
      });

    return (
        <>
            <FlatList
                data={coins}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(coin) => String(coin.id)}
                renderItem={({item}) => <CoinsDetails coin={item}></CoinsDetails>}
                contentContainerStyle={styles.FlatListContentContainer}
                onEndReached={validateLoad && loadMore}
                onEndReachedThreshold={0.8}
                ListHeaderComponent={renderHeader}
                extraData={loadFilter}
                ListFooterComponent={validateLoad && renderFooterLoader}            
            ></FlatList>
        </>
    )
}

function initialValues() {
    return {
      search: "",
    };
  }

const styles = StyleSheet.create({
    FlatListContentContainer:{
        paddingHorizontal:5,
        marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner:{
        marginTop: 20,
        marginBottom: Platform.OS === "android" ? 90 : 80,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
});