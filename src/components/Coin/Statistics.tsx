
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//importe de componente propio, constante de estilos
import { stylesStats } from './styles';

//Funcion para construccion del componente de los stats del detalle de la moneda.
export default function Statistics(props: { price_usd: string; percent_change_1h: string; percent_change_24h: string; percent_change_7d: string; price_btc: string; }) 
{
    const {price_usd, percent_change_1h, percent_change_24h, percent_change_7d, price_btc} = props;
    
    const numberStyles = (valor: string | number) => {
        const color = valor > 0 ? "#00ac17" : "#ff3e3e";
        return{
            color: color,
        };
    };
    
    //Funcion mostrar flecha segun valor
    const textValue = (valor: string | number) => {
        const flecha = valor > 0 ? " ↑" : " ↓";
        const text = valor + flecha;
        return text;
    };

    return (
        <View style={stylesStats.content}>
            <Text style={stylesStats.title}>Estadisticas Base</Text>
            
                <View style={stylesStats.block}>
                    <View style={stylesStats.blockTitle}>
                        <Text style={stylesStats.statName}>Precio en Dolares:</Text>
                        <Text style={stylesStats.statName}>Precio en Bitcoins:</Text>
                        <Text style={stylesStats.statName}>Porcentaje de cambio 01H:</Text>
                        <Text style={stylesStats.statName}>Porcentaje de cambio 24H:</Text>
                        <Text style={stylesStats.statName}>Porcentaje de cambio 07D:</Text>
                    </View>
                    <View style={stylesStats.blockInformacion}>
                        <Text style={stylesStats.number}>{price_usd} USD</Text>
                        <Text style={stylesStats.number}>{price_btc} BTC</Text>
                        <Text style={[stylesStats.number, numberStyles(percent_change_1h), ]}>{textValue(percent_change_1h)}</Text>
                        <Text style={[stylesStats.number, numberStyles(percent_change_24h), ]}>{textValue(percent_change_24h)}</Text>
                        <Text style={[stylesStats.number, numberStyles(percent_change_7d), ]}>{textValue(percent_change_7d)}</Text>
                    </View>
                </View>

        </View>
    )
}