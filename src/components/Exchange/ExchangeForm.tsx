import React from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';
import { useFormik } from "formik";
import * as Yup from "yup";

//
import {exchange} from "../../util/exchange";

export default function ExchangeForm(props) 
{
    const {symbol, price_usd} = props;
    let de:string = "De " + symbol;

    const exchangeToUSD = (valor:number) => {
        try 
        {
            formik.setFieldValue("coinOf", valor);
    
            let exchangeObj = new exchange();
            exchangeObj.getExchangeUSD(price_usd, valor);
            formik.setFieldValue("coinTo", exchangeObj.getValor().toString());
        }
        catch (error)
        {
            throw(error);
        }
    }

    const exchangeOfUSD = (valor:number) => {
        try 
        {
            formik.setFieldValue("coinTo", valor);
            let exchangeObj = new exchange();
            exchangeObj.getExchangeTo(price_usd, valor);
            formik.setFieldValue("coinOf", exchangeObj.getValor().toString());
        } 
        catch (error) 
        {
            throw(error);
        } 
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationData()),
        onSubmit: (formValue) => {
            
        },
      });

    return (
        <View>
            <Text style={styles.title}>Cambio de monedas</Text>
            <Text style={styles.texto}>De {symbol} a USD</Text>
            <TextInput
                placeholder={de}
                style={styles.input}
                keyboardType='numeric'
                value={formik.values.coinOf}
                onChangeText={(text) => exchangeToUSD(text)}
            />
            <TextInput
                placeholder="A USD"
                style={styles.input}
                keyboardType='numeric'
                value={formik.values.coinTo}
                onChangeText={(text) => exchangeOfUSD(text)}
            />

            <Text style={styles.error}>{formik.errors.coinOf}</Text>
            <Text style={styles.error}>{formik.errors.coinTo}</Text>
        </View>
    )
}

function validationData() {
    return {
        coinOf: Yup.number().required("Solo se aceptan numeros en el campo DE"),
        coinTo: Yup.number().required("Solo se aceptan numeros en el campo A"),
    };
  }

function initialValues() {
    return {
      coinOf: "",
      coinTo: "",
    };
  }

const styles = StyleSheet.create({
    title: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold",
      //marginTop: 50,
      marginBottom: 10,
    },
    texto: {
        textAlign: "center",
        fontSize: 15,
        color: "grey",
      },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    error: {
      textAlign: "center",
      color: "#f00",
      marginTop: 20,
    },
  });
  