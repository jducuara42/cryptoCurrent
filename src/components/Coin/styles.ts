import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create(
{
    background: 
    {
        backgroundColor: "grey",
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

export const stylesStats = StyleSheet.create({
    content:
    {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 30,
    },
    block:
    {
        flexDirection: "row",
        paddingVertical: 5,

    },
    blockTitle:
    {
        width:"60%",
    },
    title:
    {
        fontWeight: "bold",
        fontSize: 25,
        paddingBottom: 5,
        textAlign: "center",
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
