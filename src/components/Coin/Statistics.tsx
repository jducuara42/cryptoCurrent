
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Statistics(props) 
{
    console.log("Props-S", props);
    const {price_usd, percent_change_1h, percent_change_24h, percent_change_7d, price_btc} = props;
    
    const numberStyles = (valor) => {
        const color = valor > 0 ? "#00ac17" : "#ff3e3e";
        return{
            color: color,
        };
    };
    
    const textValue = (valor) => {
        const flecha = valor > 0 ? " ↑" : " ↓";
        const text = valor + flecha;
        return text;
    };

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Estadisticas Base:</Text>
            
                <View style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.statName}>Precio en Dolares:</Text>
                        <Text style={styles.statName}>Precio en Bitcoins:</Text>
                        <Text style={styles.statName}>Porcentaje de cambio 01H:</Text>
                        <Text style={styles.statName}>Porcentaje de cambio 24H:</Text>
                        <Text style={styles.statName}>Porcentaje de cambio 07D:</Text>
                    </View>
                    <View style={styles.blockInformacion}>
                        <Text style={styles.number}>{price_usd} USD</Text>
                        <Text style={styles.number}>{price_btc} BTC</Text>
                        <Text style={[styles.number, numberStyles(percent_change_1h), ]}>{textValue(percent_change_1h)}</Text>
                        <Text style={[styles.number, numberStyles(percent_change_24h), ]}>{textValue(percent_change_24h)}</Text>
                        <Text style={[styles.number, numberStyles(percent_change_7d), ]}>{textValue(percent_change_7d)}</Text>
                    </View>
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    content:
    {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 100,
    },
    block:
    {
        flexDirection: "row",
        paddingVertical: 5,

    },
    blockTitle:
    {
        width:"50%",

    },
    title:
    {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
    },
    statName:
    {
        fontSize: 13,
        color: "#6b6b6b",
    },
    blockInformacion:
    {
        width: "100%",
        flexDirection: "column"
        //alignItems: "center",
    },
    number:
    {
        width: "40%",
        fontSize: 13,
        color: "black",
    },
    backgroundBarra:
    {
        backgroundColor: "#dedede",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden",
    },
    barra: 
    {
        //backgroundColor: "red",
        //width: "100%",
        height: 5,
        borderRadius: 20,
    }
});
